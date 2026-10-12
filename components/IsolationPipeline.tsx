import React from "react";

export default function IsolationPipeline() {
  return (
    <section className="mb-16 scroll-mt-24" id="schematic">
      <div className="border-2 border-blueprint-ink bg-blueprint-paper p-6 lg:p-8 shadow-[4px_4px_0px_#0c0d10]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blueprint-ink/20 pb-4 mb-6">
          <div>
            <span className="font-mono-spec text-xs text-blueprint-azure font-bold block mb-1">
              FIG 2.0 // ISOLATION TOPOLOGY
            </span>
            <h2 className="font-serif-display text-4xl text-blueprint-ink">
              Deterministic State Isolation Pipeline
            </h2>
          </div>
          <span className="font-mono-spec text-xs text-blueprint-muted">
            ACID BARRIER ENFORCEMENT
          </span>
        </div>

        <p className="text-sm font-swiss-sans text-blueprint-muted mb-8 max-w-3xl">
          Schematic representation of the cognitive boundary. Unbounded LLM probabilistic tokens
          are intercepted and rigorously typed before acquiring row locks in Postgres 16.
        </p>

        {/* Technical Pipeline Flowchart in High-Contrast Blueprint Style */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[880px] grid grid-cols-6 gap-3 font-mono-spec relative py-6">
            {/* Horizontal Connector Wire */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-blueprint-ink/30 -translate-y-1/2 pointer-events-none z-0"></div>

            {/* Block 1: Ingestion */}
            <div className="relative z-10 bg-blueprint-paper border-2 border-blueprint-ink p-3 text-center flex flex-col justify-between shadow-xs">
              <span className="text-[9px] text-blueprint-muted block">CALLOUT [01]</span>
              <div className="my-2">
                <span className="material-symbols-outlined text-blueprint-azure text-2xl">
                  mic_none
                </span>
                <span className="block text-xs font-bold text-blueprint-ink mt-1">CLIENT TIER</span>
              </div>
              <span className="text-[10px] text-blueprint-muted">WhatsApp / React UI</span>
            </div>

            {/* Block 2: Gateway & RBAC */}
            <div className="relative z-10 bg-blueprint-paper border-2 border-blueprint-ink p-3 text-center flex flex-col justify-between shadow-xs">
              <span className="text-[9px] text-blueprint-muted block">CALLOUT [02]</span>
              <div className="my-2">
                <span className="material-symbols-outlined text-blueprint-ink text-2xl">
                  security
                </span>
                <span className="block text-xs font-bold text-blueprint-ink mt-1">
                  GATEWAY RBAC
                </span>
              </div>
              <span className="text-[10px] text-blueprint-muted">JWT + Rate Limiter</span>
            </div>

            {/* Block 3: Gemini Probabilistic Reasoning */}
            <div className="relative z-10 bg-blueprint-tint border-2 border-blueprint-azure p-3 text-center flex flex-col justify-between shadow-xs">
              <span className="text-[9px] text-blueprint-azure font-bold block">CALLOUT [03]</span>
              <div className="my-2">
                <span className="material-symbols-outlined text-blueprint-azure text-2xl">
                  psychology
                </span>
                <span className="block text-xs font-bold text-blueprint-azure mt-1">
                  GEMINI NLU
                </span>
              </div>
              <span className="text-[10px] text-blueprint-azure font-semibold">
                Probabilistic Token Loop
              </span>
            </div>

            {/* Block 4: Strict Zod Gatekeeper */}
            <div className="relative z-10 bg-blueprint-paper border-2 border-patent-red p-3 text-center flex flex-col justify-between shadow-xs">
              <span className="text-[9px] text-patent-red font-bold block">CALLOUT [04]</span>
              <div className="my-2">
                <span className="material-symbols-outlined text-patent-red text-2xl">
                  verified_user
                </span>
                <span className="block text-xs font-bold text-patent-red mt-1">ZOD SHIELD</span>
              </div>
              <span className="text-[10px] text-patent-red font-semibold">Deterministic Parse</span>
            </div>

            {/* Block 5: Concurrency Redis Lock */}
            <div className="relative z-10 bg-blueprint-paper border-2 border-blueprint-ink p-3 text-center flex flex-col justify-between shadow-xs">
              <span className="text-[9px] text-blueprint-muted block">CALLOUT [05]</span>
              <div className="my-2">
                <span className="material-symbols-outlined text-blueprint-ink text-2xl">
                  lock_clock
                </span>
                <span className="block text-xs font-bold text-blueprint-ink mt-1">REDIS MUTEX</span>
              </div>
              <span className="text-[10px] text-blueprint-muted">Atomic Lock Acquisition</span>
            </div>

            {/* Block 6: PostgreSQL 16 ACID */}
            <div className="relative z-10 bg-blueprint-paper border-2 border-patent-seal p-3 text-center flex flex-col justify-between shadow-xs">
              <span className="text-[9px] text-patent-seal font-bold block">CALLOUT [06]</span>
              <div className="my-2">
                <span className="material-symbols-outlined text-patent-seal text-2xl">
                  database
                </span>
                <span className="block text-xs font-bold text-patent-seal mt-1">POSTGRES 16</span>
              </div>
              <span className="text-[10px] text-patent-seal font-semibold">
                ACID Tenant RLS Write
              </span>
            </div>
          </div>
        </div>

        {/* Annotation Legend */}
        <div className="mt-4 p-4 border border-blueprint-ink/15 bg-blueprint-bg flex flex-wrap items-center justify-between text-xs font-mono-spec gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blueprint-tint border border-blueprint-azure"></span>
            <span className="text-blueprint-muted">Cognitive Probabilistic Territory</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blueprint-paper border border-patent-red"></span>
            <span className="text-blueprint-muted">Strict Type Guard Barrier</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blueprint-paper border border-patent-seal"></span>
            <span className="text-blueprint-muted">ACID Relational Target</span>
          </div>
          <span className="text-blueprint-azure font-bold">
            BENCHMARK: 0 DATA CORRUPTIONS ACROSS 4 YEARS
          </span>
        </div>
      </div>
    </section>
  );
}
