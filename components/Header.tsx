"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resume";

interface HeaderProps {
  onOpenDossier: () => void;
}

export default function Header({ onOpenDossier }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-blueprint-bg/95 backdrop-blur border-b border-blueprint-ink/20">
      {/* Top Registry Ribbon */}
      <div className="border-b border-blueprint-ink/10 py-1.5 px-4 sm:px-8 text-[11px] font-mono-spec tracking-wider flex flex-wrap items-center justify-between gap-2 text-blueprint-muted">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 font-semibold text-blueprint-ink">
            <span className="text-blueprint-azure font-bold">⌖</span> SPEC-DOC: PS-2026-AI-RLS
          </span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">
            CLASS: 706/12 (DISTRIBUTED REASONING &amp; CONCURRENCY ARBITRATION)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-blueprint-azure font-mono-spec font-medium">
            INVENTOR: {RESUME_DATA.name.toUpperCase()}
          </span>
          <span
            className="inline-block w-2 h-2 rounded-full bg-patent-seal animate-pulse"
            title="System Live"
          />
          <span className="text-blueprint-ink uppercase text-[10px] font-bold tracking-widest bg-blueprint-subtle px-2 py-0.5 border border-blueprint-ink/15">
            FILED: AP-SOUTH-1
          </span>
        </div>
      </div>

      {/* Architectural Monogram & Nav Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Technical Crosshair Stamp Monogram */}
          <a
            href="#specification"
            className="w-10 h-10 border border-blueprint-ink flex items-center justify-center relative font-mono-spec font-bold text-sm bg-blueprint-paper shadow-sm hover:border-blueprint-azure transition-colors"
          >
            <span className="relative z-10 text-blueprint-azure">PS</span>
            <span className="absolute -top-1 -left-1 text-[9px] text-blueprint-muted">⊕</span>
            <span className="absolute -bottom-1 -right-1 text-[9px] text-blueprint-muted">⊕</span>
          </a>
          <div className="flex flex-col">
            <span className="font-mono-spec text-xs uppercase tracking-widest text-blueprint-ink font-bold leading-none">
              {RESUME_DATA.name}
            </span>
            <span className="font-mono-spec text-[10px] text-blueprint-muted tracking-tight mt-1">
              {RESUME_DATA.title} &bull; 4+ Yrs Exp
            </span>
          </div>
        </div>

        {/* Broadsheet Spec Sheet Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-mono-spec text-xs">
          <a
            className="px-3 py-1.5 border border-transparent hover:border-blueprint-ink/30 hover:bg-blueprint-paper transition-all"
            href="#specification"
          >
            01// SPECIFICATION
          </a>
          <a
            className="px-3 py-1.5 border border-transparent hover:border-blueprint-ink/30 hover:bg-blueprint-paper transition-all"
            href="#figure-1"
          >
            02// FIG. 1 MOTODOCK
          </a>
          <a
            className="px-3 py-1.5 border border-transparent hover:border-blueprint-ink/30 hover:bg-blueprint-paper transition-all"
            href="#provenance"
          >
            03// WORK HISTORY
          </a>
          <a
            className="px-3 py-1.5 border border-transparent hover:border-blueprint-ink/30 hover:bg-blueprint-paper transition-all"
            href="#schematic"
          >
            04// ISO SCHEMATICS
          </a>
          <a
            className="px-3 py-1.5 border border-transparent hover:border-blueprint-ink/30 hover:bg-blueprint-paper transition-all"
            href="#claims"
          >
            05// SQL CLAIMS
          </a>
          <a
            className="px-3 py-1.5 border border-transparent hover:border-blueprint-ink/30 hover:bg-blueprint-paper transition-all"
            href="#taxonomy"
          >
            06// TAXONOMY
          </a>
        </nav>

        {/* Quick Inspection Trigger & Social Links */}
        <div className="flex items-center gap-2">
          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-2.5 py-1.5 border border-blueprint-ink/30 bg-blueprint-paper hover:bg-blueprint-ink hover:text-white font-mono-spec text-xs transition-colors"
            title="GitHub Profile"
          >
            GH ↗
          </a>
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-2.5 py-1.5 border border-blueprint-ink/30 bg-blueprint-paper hover:bg-blueprint-azure hover:text-white font-mono-spec text-xs transition-colors"
            title="LinkedIn Profile"
          >
            IN ↗
          </a>
          <button
            onClick={onOpenDossier}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-blueprint-azure bg-blueprint-azure text-white font-mono-spec text-xs font-semibold hover:bg-blueprint-cobalt transition-colors shadow-sm"
          >
            <span className="text-xs">⊞</span> <span>INSPECT DOSSIER [⌘K]</span>
          </button>
        </div>
      </div>
    </header>
  );
}
