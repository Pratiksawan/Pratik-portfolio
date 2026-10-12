import React from "react";

export default function ProductionLedger() {
  return (
    <section className="mb-16 scroll-mt-24" id="provenance">
      <div className="border-2 border-blueprint-ink bg-blueprint-paper p-6 lg:p-8 shadow-[4px_4px_0px_#0c0d10]">
        <div className="flex items-center justify-between border-b border-blueprint-ink/20 pb-4 mb-6">
          <div>
            <span className="font-mono-spec text-xs text-blueprint-azure font-bold block mb-1">
              SECTION 03 // PROFESSIONAL EXPERIENCE &amp; FIELD DEPLOYMENTS
            </span>
            <h2 className="font-serif-display text-4xl text-blueprint-ink">
              Professional Work History
            </h2>
          </div>
          <span className="font-mono-spec text-xs text-blueprint-muted hidden sm:block">
            2021 &mdash; PRESENT PRODUCTION ARCHIVES
          </span>
        </div>

        <p className="text-sm font-swiss-sans text-blueprint-muted mb-8 max-w-3xl">
          Direct engineering ownership on high-throughput platforms where latency bottlenecks,
          concurrency race conditions, and message loss directly impact enterprise financial balances
          and operational continuity.
        </p>

        {/* Swiss Ledger Broadsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-spec">
          {/* Ledger 01: Avanse Financial Services */}
          <div className="border-2 border-blueprint-ink p-5 bg-blueprint-bg flex flex-col justify-between hover:bg-blueprint-paper transition-colors relative">
            <span className="absolute top-2 right-2 text-[10px] text-blueprint-azure font-bold border border-blueprint-azure px-1.5 py-0.5">
              LEDGER #001
            </span>
            <div>
              <span className="text-[10px] text-blueprint-muted uppercase block mb-1">
                FINTECH &amp; NBFC SCALE &bull; SMARTCONNECT
              </span>
              <h3 className="font-bold text-base text-blueprint-ink mb-1">
                Avanse Financial Services
              </h3>
              <p className="text-xs text-blueprint-azure mb-4 font-semibold">
                Sampark Onboarding &amp; Loan Eligibility Engine
              </p>
              <p className="font-swiss-sans text-xs text-blueprint-muted mb-4 leading-relaxed">
                Architected end-to-end WhatsApp Flows dynamic JSON rendering layer. Built
                sub-millisecond loan pre-qualification caching with strict fault isolation.
              </p>
              <div className="space-y-2 border-t border-blueprint-rule pt-3 text-[11px]">
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">WhatsApp Flows dynamic JSON screens</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">Redis evaluation latency &lt;0.8ms</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">
                    Zero session state leaks across NBFC applicants
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-blueprint-ink/20 flex items-center justify-between text-[10px]">
              <span className="text-blueprint-muted">ROLE: Software Engineer (Architect)</span>
              <span className="text-patent-seal font-bold">100K+ SESSIONS</span>
            </div>
          </div>

          {/* Ledger 02: Häfele GmbH & Co KG */}
          <div className="border-2 border-blueprint-ink p-5 bg-blueprint-bg flex flex-col justify-between hover:bg-blueprint-paper transition-colors relative">
            <span className="absolute top-2 right-2 text-[10px] text-blueprint-azure font-bold border border-blueprint-azure px-1.5 py-0.5">
              LEDGER #002
            </span>
            <div>
              <span className="text-[10px] text-blueprint-muted uppercase block mb-1">
                GLOBAL ARCHITECTURAL HARDWARE &bull; SMARTCONNECT
              </span>
              <h3 className="font-bold text-base text-blueprint-ink mb-1">
                Häfele GmbH &amp; Co KG
              </h3>
              <p className="text-xs text-blueprint-azure mb-4 font-semibold">
                Global Customer &amp; Dealer Conversational Mesh
              </p>
              <p className="font-swiss-sans text-xs text-blueprint-muted mb-4 leading-relaxed">
                24/7 production ownership of multi-catalog conversational query routing. Designed
                zero-data-loss webhook consumers with exponential backoff retry circuits.
              </p>
              <div className="space-y-2 border-t border-blueprint-rule pt-3 text-[11px]">
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">
                    Zero-message-loss webhook queue processing
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">99.98% sustained platform availability</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">Cross-regional dealer routing logic</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-blueprint-ink/20 flex items-center justify-between text-[10px]">
              <span className="text-blueprint-muted">ROLE: Software Engineer (Owner)</span>
              <span className="text-blueprint-azure font-bold">99.98% AUDITED UPTIME</span>
            </div>
          </div>

          {/* Ledger 03: LG Electronics */}
          <div className="border-2 border-blueprint-ink p-5 bg-blueprint-bg flex flex-col justify-between hover:bg-blueprint-paper transition-colors relative">
            <span className="absolute top-2 right-2 text-[10px] text-blueprint-azure font-bold border border-blueprint-azure px-1.5 py-0.5">
              LEDGER #003
            </span>
            <div>
              <span className="text-[10px] text-blueprint-muted uppercase block mb-1">
                MULTINATIONAL CONSUMER ELECTRONICS &bull; SMARTCONNECT
              </span>
              <h3 className="font-bold text-base text-blueprint-ink mb-1">LG Electronics</h3>
              <p className="text-xs text-blueprint-azure mb-4 font-semibold">
                Emergency Production Triage &amp; Concurrency Patch
              </p>
              <p className="font-swiss-sans text-xs text-blueprint-muted mb-4 leading-relaxed">
                Spearheaded live diagnostic triage during high-volume backend bottlenecks. Eliminated
                race condition deadlocks without violating downstream contracts.
              </p>
              <div className="space-y-2 border-t border-blueprint-rule pt-3 text-[11px]">
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">
                    Eliminated concurrent data race deadlocks
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">Zero-regression backwards API integrity</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-blueprint-azure font-bold">⊞</span>
                  <span className="text-blueprint-ink">PostgreSQL execution path tuning</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-blueprint-ink/20 flex items-center justify-between text-[10px]">
              <span className="text-blueprint-muted">ROLE: Software Engineer (Triage)</span>
              <span className="text-patent-red font-bold">MTTR: &lt;15 MINUTES</span>
            </div>
          </div>
        </div>

        {/* Prior Enterprise Tenures */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono-spec text-xs">
          <div className="p-4 border border-blueprint-ink/20 bg-blueprint-paper">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-blueprint-ink">
                Tech Sierra &bull; Full Stack Developer
              </span>
              <span className="text-[10px] text-blueprint-muted">Dec 2021 &ndash; Mar 2023</span>
            </div>
            <p className="text-[11px] text-blueprint-muted font-swiss-sans leading-relaxed">
              Engineered React.js and Node.js microservices. Integrated ChatGPT API pipelines for
              multi-turn customer conversations and maintained Jest/Mocha test suites achieving{" "}
              <strong>99.5%+ stability</strong>.
            </p>
          </div>
          <div className="p-4 border border-blueprint-ink/20 bg-blueprint-paper">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-blueprint-ink">
                Jain Info X &bull; Software Developer
              </span>
              <span className="text-[10px] text-blueprint-muted">Apr 2023 &ndash; Jul 2023</span>
            </div>
            <p className="text-[11px] text-blueprint-muted font-swiss-sans leading-relaxed">
              Developed high-density corporate data interfaces and asynchronous PDF/Excel report
              export engines with zero main-thread event loop blocking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
