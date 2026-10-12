import React from "react";
import { RESUME_DATA } from "@/data/resume";

export default function MetaBanner() {
  return (
    <div className="border-2 border-blueprint-ink bg-blueprint-paper p-4 sm:p-6 mb-12 shadow-[4px_4px_0px_#0c0d10] relative">
      <div className="absolute -top-3 left-6 bg-blueprint-paper px-2 font-mono-spec text-[11px] font-bold tracking-widest text-blueprint-azure border border-blueprint-ink">
        UNITED STATES &amp; GLOBAL TECHNICAL PATENT SPECIFICATION SPECIMEN
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono-spec border-b border-blueprint-rule pb-4 text-blueprint-muted">
        <div>
          <span className="block text-[10px] text-blueprint-ink/60 uppercase">
            APPLICATION / ARCHIVE REF
          </span>
          <span className="font-bold text-blueprint-ink text-sm">US-2026/0402-A1</span>
        </div>
        <div>
          <span className="block text-[10px] text-blueprint-ink/60 uppercase">
            CLASSIFICATION DOMAIN
          </span>
          <span className="font-semibold text-blueprint-ink">
            AI Orchestration &amp; RLS Concurrency
          </span>
        </div>
        <div>
          <span className="block text-[10px] text-blueprint-ink/60 uppercase">
            INSPECTION STATUS
          </span>
          <span className="font-semibold text-patent-seal">VERIFIED PRODUCTION ACTIVE</span>
        </div>
        <div>
          <span className="block text-[10px] text-blueprint-ink/60 uppercase">
            PRIMARY INVENTOR RECORD
          </span>
          <span className="font-semibold text-blueprint-ink">
            {RESUME_DATA.name} &bull; Navi Mumbai, IN
          </span>
        </div>
      </div>
      <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-spec text-blueprint-muted">
        <span>DRAWING SHEET: 01 OF 06</span>
        <span>LATENCY BOUND: &lt;0.8ms (Redis Cache)</span>
        <span>DATABASE INTEGRITY: PostgreSQL Strict ACID + Zod RLS</span>
        <span>
          TELEGRAPH:{" "}
          <a
            className="text-blueprint-azure underline font-medium"
            href={`mailto:${RESUME_DATA.email}`}
          >
            {RESUME_DATA.email}
          </a>
        </span>
      </div>
    </div>
  );
}
