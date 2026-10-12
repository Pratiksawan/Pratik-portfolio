import React from "react";
import { RESUME_DATA } from "@/data/resume";

interface FooterProps {
  onOpenDossier: () => void;
}

export default function Footer({ onOpenDossier }: FooterProps) {
  return (
    <footer className="border-t-2 border-blueprint-ink bg-blueprint-paper py-10 px-4 sm:px-8 mt-12 font-mono-spec text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-bold text-blueprint-ink text-sm">
            <span>⊕ SPEC-ARCHIVE-PS-2026</span>
            <span className="text-blueprint-azure">|</span>
            <span>{RESUME_DATA.name.toUpperCase()}</span>
          </div>
          <p className="text-blueprint-muted text-[11px] mt-1">
            Architectural Patent Specimen &bull; Distributed Systems, AI Orchestration &amp; ACID
            Concurrency.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[11px]">
          <div>
            <span className="text-blueprint-muted block text-[10px]">TELEGRAPH / VOICE:</span>
            <a
              className="text-blueprint-ink font-bold hover:text-blueprint-azure transition-colors"
              href={`tel:${RESUME_DATA.phone.replace(/\s+/g, "")}`}
            >
              {RESUME_DATA.phone}
            </a>
          </div>
          <div>
            <span className="text-blueprint-muted block text-[10px]">DISPATCH INBOX:</span>
            <a
              className="text-blueprint-azure font-bold underline"
              href={`mailto:${RESUME_DATA.email}`}
            >
              {RESUME_DATA.email}
            </a>
          </div>
          <div>
            <span className="text-blueprint-muted block text-[10px]">GEOGRAPHIC REGION:</span>
            <span className="text-blueprint-ink font-semibold">Navi Mumbai, Maharashtra, IN</span>
          </div>
          <button
            onClick={onOpenDossier}
            className="px-3 py-1.5 bg-blueprint-ink text-white font-mono-spec text-xs font-bold hover:bg-blueprint-azure transition-colors"
          >
            INSPECT DOSSIER [⌘K]
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-blueprint-rule mt-6 pt-4 flex flex-wrap items-center justify-between text-[10px] text-blueprint-muted">
        <span>
          DESIGN LANGUAGE: SWISS EDITORIAL &times; ARCHITECTURAL BLUEPRINT SPECIFICATION (STITCH)
        </span>
        <span>ALL TRANSACTIONS BOUNDED &bull; COPYRIGHT &copy; 2026 {RESUME_DATA.name.toUpperCase()}</span>
      </div>
    </footer>
  );
}
