import React from "react";
import { RESUME_DATA } from "@/data/resume";

export default function CompetencyTaxonomy() {
  return (
    <section className="mb-16 scroll-mt-24" id="taxonomy">
      <div className="border-2 border-blueprint-ink bg-blueprint-paper p-6 lg:p-8 shadow-[4px_4px_0px_#0c0d10]">
        <div className="border-b border-blueprint-ink/20 pb-4 mb-6">
          <span className="font-mono-spec text-xs text-blueprint-azure font-bold block mb-1">
            TECHNICAL BENCH // TAXONOMY
          </span>
          <h2 className="font-serif-display text-4xl text-blueprint-ink">
            Standardized Stack Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono-spec">
          {RESUME_DATA.competencies.map((c) => (
            <div
              key={c.id}
              className="border border-blueprint-ink/20 p-4 bg-blueprint-bg flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] text-blueprint-azure font-bold block mb-2">
                  [{c.id}] {c.domain}
                </span>
                <h3 className="font-bold text-sm text-blueprint-ink mb-2">{c.title}</h3>
                <ul className="space-y-1.5 text-xs text-blueprint-muted">
                  {c.skills.map((s, idx) => (
                    <li key={idx}>&bull; {s}</li>
                  ))}
                </ul>
              </div>
              <span className="text-[9px] text-blueprint-ink/40 mt-4 pt-2 border-t border-blueprint-rule block">
                {c.tagline}
              </span>
            </div>
          ))}
        </div>

        {/* Academic Provenance */}
        <div className="mt-6 pt-4 border-t border-blueprint-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono-spec text-xs">
          <div>
            <span className="text-blueprint-azure font-bold">ACADEMIC PROVENANCE: </span>
            <span className="text-blueprint-ink font-semibold">{RESUME_DATA.education.degree}</span>
            <span className="text-blueprint-muted">
              {" "}
              &bull; {RESUME_DATA.education.institution}
            </span>
          </div>
          <span className="text-blueprint-muted">
            GRADUATED: {RESUME_DATA.education.graduation.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  );
}
