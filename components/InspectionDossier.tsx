"use client";

import React, { useEffect } from "react";
import { RESUME_DATA } from "@/data/resume";

interface InspectionDossierProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InspectionDossier({ isOpen, onClose }: InspectionDossierProps) {
  // Handle keyboard shortcut Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="inspectionDrawer"
      className="fixed inset-0 z-50 bg-blueprint-ink/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-blueprint-paper border-4 border-blueprint-ink w-full max-w-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#0c0d10] font-mono-spec relative max-h-[90vh] overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b-2 border-blueprint-ink pb-4 mb-6">
          <div>
            <span className="text-[10px] text-blueprint-azure font-bold block uppercase">
              EXECUTIVE ENGINEERING DOSSIER &bull; VERIFIED RESUME
            </span>
            <h3 className="font-serif-display text-3xl text-blueprint-ink">{RESUME_DATA.name}</h3>
            <span className="text-xs text-blueprint-muted">
              {RESUME_DATA.title} &bull; {RESUME_DATA.subtitle}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-2.5 py-1 text-xs border border-blueprint-ink bg-blueprint-bg hover:bg-blueprint-ink hover:text-white transition-colors"
              title="Print / Save PDF"
            >
              ⎙ Print / PDF
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 border border-blueprint-ink flex items-center justify-center hover:bg-blueprint-ink hover:text-white transition-colors text-sm font-bold"
              aria-label="Close Dossier"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dossier Content Body */}
        <div className="space-y-6 text-xs text-blueprint-ink">
          {/* Summary Statement */}
          <div>
            <span className="font-bold text-blueprint-azure block mb-1 uppercase text-[11px]">
              [EXECUTIVE SUMMARY]
            </span>
            <p className="font-swiss-sans text-sm text-blueprint-muted leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Contact Credentials */}
          <div className="border-2 border-blueprint-ink p-4 bg-blueprint-bg">
            <span className="font-bold text-blueprint-ink block mb-2 uppercase text-[11px]">
              DIRECT CONTACT INFORMATION
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-blueprint-muted block text-[10px]">DIRECT TELEPHONE:</span>
                <span className="font-bold text-blueprint-ink">{RESUME_DATA.phone}</span>
              </div>
              <div>
                <span className="text-blueprint-muted block text-[10px]">OFFICIAL EMAIL:</span>
                <a
                  className="font-bold text-blueprint-azure underline"
                  href={`mailto:${RESUME_DATA.email}`}
                >
                  {RESUME_DATA.email}
                </a>
              </div>
              <div>
                <span className="text-blueprint-muted block text-[10px]">TIMEZONE / BASE:</span>
                <span className="font-bold text-blueprint-ink">{RESUME_DATA.location}</span>
              </div>
              <div>
                <span className="text-blueprint-muted block text-[10px]">PROFILES:</span>
                <span className="font-bold">
                  <a
                    href={RESUME_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-azure underline"
                  >
                    GitHub
                  </a>{" "}
                  &bull;{" "}
                  <a
                    href={RESUME_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-azure underline"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience Ledger */}
          <div>
            <span className="font-bold text-blueprint-azure block mb-2 uppercase text-[11px]">
              [PROFESSIONAL EXPERIENCE]
            </span>
            <div className="space-y-4 font-swiss-sans text-xs">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`border-l-2 pl-3 ${
                    idx === 0 ? "border-blueprint-azure" : "border-blueprint-ink/40"
                  }`}
                >
                  <div className="flex justify-between font-bold text-blueprint-ink font-mono-spec">
                    <span>
                      {exp.company} &bull; {exp.role}
                    </span>
                    <span className={idx === 0 ? "text-blueprint-azure" : "text-blueprint-muted"}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-blueprint-muted mt-1 text-[11px]">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Systems in Production */}
          <div>
            <span className="font-bold text-blueprint-azure block mb-2 uppercase text-[11px]">
              [SYSTEMS IN PRODUCTION]
            </span>
            <ul className="space-y-2 text-xs font-swiss-sans text-blueprint-muted">
              <li>
                <strong>&bull; MotoDock:</strong> Multi-tenant automotive ERP with Hinglish Gemini
                1.5 diagnostic pipeline, 5-tier RBAC, and collision-safe inventory sequencing.
              </li>
              <li>
                <strong>&bull; Avanse Sampark:</strong> WhatsApp Flows loan onboarding with
                sub-millisecond (&lt;0.8ms) Redis eligibility decision engine.
              </li>
              <li>
                <strong>&bull; Häfele Enterprise:</strong> Global 24/7 conversational support webhook
                infrastructure with zero message loss.
              </li>
            </ul>
          </div>

          {/* Academic Provenance */}
          <div className="border-t border-blueprint-rule pt-3 text-[11px]">
            <span className="font-bold text-blueprint-ink font-mono-spec">EDUCATION:</span>{" "}
            <span>
              {RESUME_DATA.education.degree} &bull; {RESUME_DATA.education.institution} &bull;
              Graduated {RESUME_DATA.education.graduation}
            </span>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="mt-8 pt-4 border-t-2 border-blueprint-ink flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              className="px-4 py-2 bg-blueprint-azure text-white font-bold text-xs hover:bg-blueprint-cobalt transition-colors"
              href={`mailto:${RESUME_DATA.email}?subject=Engaging%20Pratik%20Sawant%20-%20Systems%20Architect`}
            >
              DISPATCH IMMEDIATE EMAIL &rarr;
            </a>
            <a
              className="px-4 py-2 border border-blueprint-ink bg-blueprint-bg text-blueprint-ink font-bold text-xs hover:bg-blueprint-ink hover:text-white transition-colors"
              href={RESUME_DATA.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              WHATSAPP CHAT ↗
            </a>
          </div>
          <button
            className="text-xs text-blueprint-muted hover:text-blueprint-ink underline"
            onClick={onClose}
          >
            Close Window [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
