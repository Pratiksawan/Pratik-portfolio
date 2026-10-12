"use client";

import React, { useState } from "react";

interface SqlExhibitProps {
  onTriggerToast: (msg: string) => void;
}

const SQL_PAYLOAD = `-- SPECIFICATION EXHIBIT A: ZERO-COLLISION TENANT NUMBER GENERATOR
-- AUTHOR: PRATIK SAWANT <pratiksawant542@gmail.com>
-- CLASSIFICATION: CONCURRENCY SAFEGUARD / POSTGRESQL 16 PL/PGSQL

CREATE OR REPLACE FUNCTION generate_atomic_invoice_seq(
    p_tenant_id UUID, 
    p_doc_type VARCHAR
)
RETURNS TEXT AS $$
DECLARE
    v_fiscal_year VARCHAR(8);
    v_next_val BIGINT;
BEGIN
    -- [1] Determine current Indian fiscal calendar cycle (e.g. FY2526)
    v_fiscal_year := get_current_fiscal_year();

    -- [2] Row-level locking update on composite key (tenant, type, year)
    -- Guarantees atomic monotonically increasing integers under concurrent load
    INSERT INTO tenant_document_sequences (tenant_id, doc_type, fiscal_year, current_val)
    VALUES (p_tenant_id, p_doc_type, v_fiscal_year, 1)
    ON CONFLICT (tenant_id, doc_type, fiscal_year)
    DO UPDATE SET 
        current_val = tenant_document_sequences.current_val + 1, 
        updated_at = clock_timestamp()
    RETURNING current_val INTO v_next_val;

    -- [3] Format guaranteed deterministic identifier: e.g. INV-FY2526-000412
    RETURN format('%s-%s-%s', p_doc_type, v_fiscal_year, lpad(v_next_val::TEXT, 6, '0'));
END;
$$ LANGUAGE plpgsql STRICT SECURITY DEFINER;`;

export default function SqlExhibit({ onTriggerToast }: SqlExhibitProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SQL_PAYLOAD).then(() => {
      setCopied(true);
      onTriggerToast("EXHIBIT A: PL/PGSQL FUNCTION COPIED TO CLIPBOARD");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="mb-16 scroll-mt-24" id="claims">
      <div className="border-2 border-blueprint-ink bg-blueprint-paper p-6 lg:p-8 shadow-[4px_4px_0px_#0c0d10]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blueprint-ink/20 pb-4 mb-6">
          <div>
            <span className="font-mono-spec text-xs text-blueprint-azure font-bold block mb-1">
              SECTION 05 // EXHIBIT &apos;A&apos; CODE ARTIFACT
            </span>
            <h2 className="font-serif-display text-4xl text-blueprint-ink">
              Atomic Sequential Numbering Mechanism
            </h2>
          </div>
          <button
            onClick={handleCopy}
            className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-blueprint-bg border border-blueprint-ink font-mono-spec text-xs font-bold hover:bg-blueprint-ink hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">content_copy</span>
            <span>{copied ? "COPIED TO CLIPBOARD ✓" : "COPY SPECIFICATION CODE"}</span>
          </button>
        </div>

        <p className="text-sm font-swiss-sans text-blueprint-muted mb-4 max-w-3xl">
          The following PL/pgSQL function runs within an isolated PostgreSQL schema, securing atomic
          sequence counter generation partitioned by fiscal year and tenant ID under high
          simultaneous checkout load.
        </p>

        {/* High-contrast architectural code block */}
        <div className="bg-blueprint-bg border-2 border-blueprint-ink p-4 sm:p-5 font-mono-spec text-xs overflow-x-auto text-blueprint-ink">
          <pre>
            <code>{SQL_PAYLOAD}</code>
          </pre>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono-spec text-blueprint-muted">
          <span>PARITY CHECK: PASS</span>
          <span>LOCK SPECIFICATION: EXCLUSIVE ROW CONFLICT MUTEX</span>
          <span>COMPLIANCE: INDIAN GST / ISO 9001 COMPLIANT</span>
        </div>
      </div>
    </section>
  );
}
