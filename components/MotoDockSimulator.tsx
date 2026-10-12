"use client";

import React, { useState } from "react";
import { DIAGNOSTIC_CASES } from "@/data/diagnostics";

interface MotoDockSimulatorProps {
  onTriggerToast: (msg: string) => void;
}

export default function MotoDockSimulator({ onTriggerToast }: MotoDockSimulatorProps) {
  const [caseIndex, setCaseIndex] = useState(0);
  const currentCase = DIAGNOSTIC_CASES[caseIndex];

  const handleNextCase = () => {
    const nextIdx = (caseIndex + 1) % DIAGNOSTIC_CASES.length;
    setCaseIndex(nextIdx);
    onTriggerToast(`TRANSDUCTION APPLIED: ${DIAGNOSTIC_CASES[nextIdx].latency}`);
  };

  const formattedJson = JSON.stringify(
    {
      vehicle_matched: currentCase.vehicle,
      root_cause_prediction: currentCase.predictions,
      recommended_bom: currentCase.bom,
      estimated_labor_hours: currentCase.estimated_labor_hours,
      deterministic_total_inr: currentCase.deterministic_total_inr,
    },
    null,
    2
  );

  return (
    <section className="mb-16 scroll-mt-24" id="figure-1">
      <div className="border-2 border-blueprint-ink bg-blueprint-paper p-6 lg:p-8 shadow-[6px_6px_0px_#0c0d10]">
        {/* Figure Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-blueprint-ink pb-4 mb-6 gap-2 font-mono-spec">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blueprint-azure text-white text-xs font-bold">
                FIG 1.0
              </span>
              <h2 className="text-lg font-bold text-blueprint-ink uppercase tracking-tight">
                MotoDock: Multi-Tenant Vernacular AI Engine
              </h2>
            </div>
            <p className="text-xs text-blueprint-muted mt-1">
              CAD SCHEMATIC: VOICE TRANSDUCTION &rarr; ZOD VALIDATION GATE &rarr; DETERMINISTIC STATE
              WRITE
            </p>
          </div>
          <div className="text-right text-xs">
            <span className="text-blueprint-muted">SPECIFICATION STATUS: </span>
            <span className="text-patent-seal font-bold">ACTIVE IN PRODUCTION WORKSHOPS</span>
          </div>
        </div>

        {/* Two Column Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: System Invariants and Strict Rules */}
          <div className="lg:col-span-6 flex flex-col justify-between border border-blueprint-ink/30 p-6 bg-blueprint-bg/50">
            <div>
              <div className="flex items-center justify-between font-mono-spec text-xs text-blueprint-muted mb-4 border-b border-blueprint-rule pb-2">
                <span>INVARIANT PROPERTY CHECK</span>
                <span className="text-blueprint-azure font-bold">5-TIER RBAC MODEL</span>
              </div>

              <h3 className="font-serif-display text-3xl text-blueprint-ink mb-3 leading-snug">
                Zero-Collision Architectural Mechanics for Real-World Indian Garages
              </h3>

              <p className="text-sm text-blueprint-muted leading-relaxed mb-6 font-swiss-sans">
                Indian automotive workshops operate in colloquial Hindi, Marathi, and Hinglish.
                MotoDock accepts free-form speech diagnostic inputs, bounds them with strict Google
                Gemini structured output prompts, validates every field against TypeScript Zod
                schemas, and commits atomic sequence records via PostgreSQL advisory mutexes.
              </p>

              {/* Mechanical Rule Callouts */}
              <div className="space-y-4 font-mono-spec text-xs">
                <div className="p-3.5 bg-blueprint-paper border border-blueprint-ink/20 flex gap-3">
                  <span className="font-bold text-blueprint-azure text-sm">[A]</span>
                  <div>
                    <h4 className="font-bold text-blueprint-ink uppercase">
                      Row-Level Security (RLS) Isolation
                    </h4>
                    <p className="text-[11px] text-blueprint-muted mt-1 leading-normal">
                      PostgreSQL executes{" "}
                      <code className="text-blueprint-azure bg-blueprint-tint px-1 py-0.5">
                        SET LOCAL app.current_tenant_id
                      </code>{" "}
                      on each transaction pool lease. Impossible for Workshop &apos;A&apos; to leak
                      inventory or customer records to Workshop &apos;B&apos;.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-blueprint-paper border border-blueprint-ink/20 flex gap-3">
                  <span className="font-bold text-blueprint-azure text-sm">[B]</span>
                  <div>
                    <h4 className="font-bold text-blueprint-ink uppercase">
                      Distributed Mutex &amp; Atomic Sequences
                    </h4>
                    <p className="text-[11px] text-blueprint-muted mt-1 leading-normal">
                      Sequential invoice numbers generated via Redis atomic INCR + PostgreSQL
                      transactional sequence functions eliminate collision errors during peak
                      garage checkout rush.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-blueprint-paper border border-blueprint-ink/20 flex gap-3">
                  <span className="font-bold text-blueprint-azure text-sm">[C]</span>
                  <div>
                    <h4 className="font-bold text-blueprint-ink uppercase">
                      Unidirectional FSM Life-Cycle
                    </h4>
                    <p className="text-[11px] text-blueprint-muted mt-1 leading-normal">
                      Job card transitions follow a strict directed graph: <br />
                      <span className="text-blueprint-ink font-semibold">
                        INTAKE &rarr; DIAGNOSTIC &rarr; APPROVAL &rarr; BOM_ALLOCATION &rarr; QC
                        &rarr; INVOICE &rarr; SETTLED
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Roles Tag Footnote */}
            <div className="mt-6 pt-4 border-t border-blueprint-rule flex flex-wrap items-center gap-1.5 font-mono-spec text-[10px]">
              <span className="text-blueprint-muted mr-1">ENFORCED PERSONNEL ROLES:</span>
              <span className="px-2 py-0.5 border border-blueprint-ink/30 bg-blueprint-paper">
                1. Garage Owner
              </span>
              <span className="px-2 py-0.5 border border-blueprint-ink/30 bg-blueprint-paper">
                2. Service Advisor
              </span>
              <span className="px-2 py-0.5 border border-blueprint-ink/30 bg-blueprint-paper">
                3. Lead Mechanic
              </span>
              <span className="px-2 py-0.5 border border-blueprint-ink/30 bg-blueprint-paper">
                4. Parts Manager
              </span>
              <span className="px-2 py-0.5 border border-blueprint-ink/30 bg-blueprint-paper">
                5. Cashier
              </span>
            </div>
          </div>

          {/* Column 2: Interactive Specimen Transduction Engine */}
          <div className="lg:col-span-6 flex flex-col justify-between border-2 border-blueprint-azure p-6 bg-blueprint-paper relative">
            <div className="absolute -top-3 right-4 bg-blueprint-azure text-white px-2 py-0.5 font-mono-spec text-[10px] font-bold tracking-wider">
              INTERACTIVE REASONING SIMULATOR
            </div>

            <div>
              <div className="flex items-center justify-between font-mono-spec text-xs mb-3 text-blueprint-muted">
                <span>[FIG. 1-B] GEMINI 1.5 PRO INFERENCE</span>
                <span className="text-blueprint-azure font-bold">{currentCase.latency}</span>
              </div>

              {/* Input Complaint Frame */}
              <div className="mb-4">
                <label className="block font-mono-spec text-[11px] font-bold text-blueprint-ink uppercase mb-1">
                  1. INPUT: Raw Vernacular Workshop Complaint (Audio/Text)
                </label>
                <div className="p-3 bg-blueprint-bg border border-blueprint-ink/30 font-mono-spec text-xs relative">
                  <div className="flex items-start gap-2 text-blueprint-ink">
                    <span className="text-blueprint-azure font-bold">&raquo;</span>
                    <span className="italic">&quot;{currentCase.complaint}&quot;</span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-blueprint-rule flex items-center justify-between">
                    <span className="text-[10px] text-blueprint-muted">{currentCase.dialect}</span>
                    <button
                      onClick={handleNextCase}
                      className="px-3 py-1 bg-blueprint-ink text-white font-mono-spec text-[11px] hover:bg-blueprint-azure transition-colors flex items-center gap-1"
                    >
                      <span>↻ Transduce Next Case</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Transduction Step Indicator Bar */}
              <div className="grid grid-cols-3 gap-2 mb-4 font-mono-spec text-[10px] text-center">
                <div className="p-2 border border-blueprint-ink/20 bg-blueprint-bg">
                  <span className="block text-blueprint-muted">STEP 01</span>
                  <span className="font-bold text-patent-seal mt-0.5 block">
                    ✓ NLU Hinglish Match
                  </span>
                </div>
                <div className="p-2 border border-blueprint-ink/20 bg-blueprint-bg">
                  <span className="block text-blueprint-muted">STEP 02</span>
                  <span className="font-bold text-blueprint-azure mt-0.5 block">
                    ✓ Zod Strict Validate
                  </span>
                </div>
                <div className="p-2 border border-blueprint-ink/20 bg-blueprint-bg">
                  <span className="block text-blueprint-muted">STEP 03</span>
                  <span className="font-bold text-blueprint-ink mt-0.5 block">
                    ✓ ERP Part Audit
                  </span>
                </div>
              </div>

              {/* Output JSON Bound Specimen */}
              <div>
                <div className="flex items-center justify-between font-mono-spec text-[11px] mb-1">
                  <span className="font-bold text-blueprint-ink uppercase">
                    2. BOUND OUTPUT: Transaction-Safe Structured Payload
                  </span>
                  <span className="text-patent-seal font-bold">STATUS: 200 SCHEMA VALID</span>
                </div>
                <div className="p-3.5 bg-blueprint-ink text-white font-mono-spec text-xs rounded-none overflow-x-auto max-h-64 border border-blueprint-ink">
                  <pre>
                    <code className="text-[11px] leading-relaxed text-slate-200">
                      {formattedJson}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-blueprint-rule flex items-center justify-between font-mono-spec text-[10px] text-blueprint-muted">
              <span>BOUND CONSTRAINTS: ZERO ARBITRARY FIELD WRITES ALLOWED</span>
              <span className="text-blueprint-azure font-bold">ZOD-TYPED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
