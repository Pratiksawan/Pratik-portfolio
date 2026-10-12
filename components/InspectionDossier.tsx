"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Printer, X } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function InspectionDossier({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    const previousOverflow = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="resume-dialog"
      aria-labelledby="resume-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div id="inspectionDrawer" className="resume-sheet">
        <div className="resume-toolbar">
          <span className="eyebrow">THE RÉSUMÉ</span>
          <div>
            <button
              className="button button-small button-outline"
              onClick={() => window.print()}
            >
              <Printer size={15} /> Print / PDF
            </button>
            <button
              autoFocus
              className="resume-close"
              onClick={onClose}
              aria-label="Close résumé"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="resume-header">
          <h2 id="resume-title">
            {RESUME_DATA.name}
            <span>.</span>
          </h2>
          <p>{RESUME_DATA.title}</p>
          <span>Navi Mumbai, India · {RESUME_DATA.phone}</span>
          <div>
            <a href={`mailto:${RESUME_DATA.email}`}>{RESUME_DATA.email}</a>
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <section className="resume-section">
          <h3>Profile</h3>
          <p>{RESUME_DATA.summary}</p>
        </section>
        <section className="resume-section">
          <h3>Experience</h3>
          {RESUME_DATA.experiences.map((experience) => (
            <div className="resume-experience" key={experience.company}>
              <div>
                <h4>{experience.company}</h4>
                <span>{experience.period}</span>
              </div>
              <p>
                {experience.role} · {experience.location}
              </p>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="resume-section">
          <h3>Featured project</h3>
          <h4>MotoDock — Multi-Tenant Workshop ERP</h4>
          <p>
            AI-assisted Hinglish diagnostics, Zod-validated outputs, five-tier
            role-based access, tenant isolation, and transaction-safe document
            sequencing with PostgreSQL and Redis.
          </p>
        </section>
        <section className="resume-section">
          <h3>Technical skills</h3>
          <div className="resume-skills">
            {RESUME_DATA.competencies.map((group) => (
              <div key={group.id}>
                <h4>{group.title}</h4>
                <p>{group.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="resume-section">
          <h3>Education</h3>
          <h4>{RESUME_DATA.education.degree}</h4>
          <p>
            {RESUME_DATA.education.institution} ·{" "}
            {RESUME_DATA.education.graduation}
          </p>
        </section>
      </div>
    </dialog>
  );
}
