"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Download, Printer, X } from "lucide-react";
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
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <a
              href="/Pratik_Sawant_Resume.pdf"
              download="Pratik_Sawant_Resume.pdf"
              className="button button-small button-lime"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <Download size={14} /> Download PDF
            </a>
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
          <h3>Professional Summary</h3>
          <p>{RESUME_DATA.summary}</p>
        </section>

        <section className="resume-section">
          <h3>AI Engineering &amp; Technical Skills</h3>
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
          <h3>Professional Experience</h3>
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
          <h3>Selected AI / Systems Projects</h3>
          {RESUME_DATA.projects.map((project) => (
            <div className="resume-experience" key={project.id} style={{ marginBottom: "1.25rem" }}>
              <div>
                <h4>{project.title}</h4>
              </div>
              <p style={{ color: "var(--color-lime, #a3e635)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                {project.stack}
              </p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3>Key AI / Engineering Strengths</h3>
          <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
            {RESUME_DATA.strengths.map((strength) => (
              <li key={strength.title} style={{ marginBottom: "0.5rem", lineHeight: 1.6 }}>
                <strong>{strength.title}:</strong> {strength.description}
              </li>
            ))}
          </ul>
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
