import React from "react";
import { RESUME_DATA } from "@/data/resume";

interface HeroSpecimenProps {
  onOpenDossier: () => void;
}

export default function HeroSpecimen({ onOpenDossier }: HeroSpecimenProps) {
  return (
    <section className="mb-16 scroll-mt-24" id="specification">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Immense Typographic Editorial Column */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            {/* Dimensional Annotation Marker */}
            <div className="flex items-center gap-2 text-blueprint-azure font-mono-spec text-xs mb-3">
              <span>[CLAIM 01.0]</span>
              <div className="h-px bg-blueprint-azure/40 flex-1"></div>
              <span>TECHNICAL THESIS: DETERMINISM OVER HALLUCINATION</span>
            </div>

            {/* Immense Headline with Swiss/Editorial Contrast */}
            <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-blueprint-ink leading-[0.95] mb-6 font-normal">
              The Bounded <br />
              <span className="italic font-serif-display text-blueprint-azure">Intelligence</span>{" "}
              Specimen.
            </h1>

            <p className="font-swiss-sans text-lg sm:text-xl text-blueprint-muted max-w-2xl leading-relaxed mb-8">
              Specification of high-concurrency software architectures interfacing{" "}
              <strong className="text-blueprint-ink font-semibold">
                probabilistic generative LLMs
              </strong>{" "}
              (Google Gemini API, OpenAI ChatGPT) with{" "}
              <strong className="text-blueprint-ink font-semibold">
                deterministic relational backends
              </strong>
              . Engineered with strict row-level security, sub-millisecond Redis distributed locks,
              and zero-collision document sequencers.
            </p>

            {/* Technical Callout Leader Line Pill Cluster */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 font-mono-spec text-xs">
              {RESUME_DATA.metrics.map((m) => (
                <div key={m.id} className="p-3 border border-blueprint-ink/20 bg-blueprint-paper relative">
                  <span className="text-[10px] text-blueprint-muted block">{m.label}</span>
                  <span className="text-base font-bold text-blueprint-azure mt-1 block">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-blueprint-muted">{m.description}</span>
                  <span className="absolute top-1 right-2 text-blueprint-ink/30 text-[10px]">
                    #{m.id}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Controls Styled as Blueprint Triggers */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                className="px-5 py-3 border-2 border-blueprint-ink bg-blueprint-ink text-white font-mono-spec text-xs font-bold uppercase tracking-wider hover:bg-blueprint-azure hover:border-blueprint-azure transition-all shadow-[3px_3px_0px_#0038e0]"
                href="#figure-1"
              >
                &darr; Examine Fig 1.0 (MotoDock Engine)
              </a>
              <a
                className="px-5 py-3 border border-blueprint-ink bg-blueprint-paper text-blueprint-ink font-mono-spec text-xs font-semibold uppercase tracking-wider hover:bg-blueprint-subtle transition-all"
                href="#schematic"
              >
                View Isolation Blueprint
              </a>
              <button
                onClick={onOpenDossier}
                className="px-4 py-3 border border-blueprint-rule bg-transparent text-blueprint-muted hover:text-blueprint-ink font-mono-spec text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <span className="text-sm">⎋</span> View Full Resume [⌘K]
              </button>
            </div>
          </div>
        </div>

        {/* Right: Technical Specification Stamp & Abstract Box */}
        <div className="lg:col-span-4 bg-blueprint-paper border-2 border-blueprint-ink p-5 shadow-[4px_4px_0px_#0c0d10] font-mono-spec relative">
          {/* Crosshair corner indicators */}
          <div className="absolute top-1 left-1 text-[9px] text-blueprint-muted">⌖</div>
          <div className="absolute top-1 right-1 text-[9px] text-blueprint-muted">⌖</div>
          <div className="absolute bottom-1 left-1 text-[9px] text-blueprint-muted">⌖</div>
          <div className="absolute bottom-1 right-1 text-[9px] text-blueprint-muted">⌖</div>

          <div className="text-xs uppercase border-b border-blueprint-ink/15 pb-2 mb-3 text-blueprint-azure font-bold flex items-center justify-between">
            <span>OFFICIAL ABSTRACT &amp; FILING</span>
            <span>SEC. 102</span>
          </div>

          <p className="text-xs text-blueprint-ink/80 leading-relaxed mb-4">
            &quot;Disclosed herein is a method, architecture, and system implementation for
            harnessing natural language voice dialects (including Hinglish colloquial mechanics)
            into structured, transactional database operations without state regression or
            concurrency deadlocks.&quot;
          </p>

          <div className="space-y-2 border-t border-dashed border-blueprint-rule pt-3 text-[11px]">
            <div className="flex justify-between py-1 border-b border-blueprint-subtle">
              <span className="text-blueprint-muted">INVENTOR RECORD:</span>
              <span className="font-bold text-blueprint-ink">{RESUME_DATA.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-blueprint-subtle">
              <span className="text-blueprint-muted">TOTAL YEARS EXP:</span>
              <span className="font-bold text-blueprint-ink">4+ Years Active Prod</span>
            </div>
            <div className="flex justify-between py-1 border-b border-blueprint-subtle">
              <span className="text-blueprint-muted">SPECIALIZATION:</span>
              <span className="font-bold text-blueprint-azure">Dual-Gate LLM Architecture</span>
            </div>
            <div className="flex justify-between py-1 border-b border-blueprint-subtle">
              <span className="text-blueprint-muted">TENANCY MODEL:</span>
              <span className="font-bold text-blueprint-ink">Postgres RLS (Row-Level)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-blueprint-subtle">
              <span className="text-blueprint-muted">TEST RELIABILITY:</span>
              <span className="font-bold text-patent-seal">99.5%+ Test Stability</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-blueprint-muted">COMMUNICATION:</span>
              <span className="font-bold text-blueprint-ink">{RESUME_DATA.phone}</span>
            </div>
          </div>

          {/* Stamped Official Verification */}
          <div className="mt-4 p-2.5 border border-patent-seal/40 bg-patent-seal/5 rounded-none flex items-center gap-2">
            <span className="material-symbols-outlined text-patent-seal text-xl">verified</span>
            <div className="text-[10px] leading-tight">
              <span className="block font-bold text-patent-seal uppercase">
                Production Ready Verification
              </span>
              <span className="text-blueprint-muted">
                All claims benchmarked against real microservice traffic.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
