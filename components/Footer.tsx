"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Reveal from "./Reveal";

export default function Footer({
  onOpenDossier,
}: {
  onOpenDossier: () => void;
}) {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_DATA.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Please select the email address to copy it.");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyStatus(""), 3500);
  };
  return (
    <footer id="contact" className="section-anchor">
      <div className="container">
        <Reveal className="contact-card">
          <span className="eyebrow">
            <span className="section-number">04 /</span> LET’S BUILD SOMETHING
            GOOD
          </span>
          <div className="contact-heading">
            <h2>
              Your next idea.
              <br />
              Our next <span>conversation.</span>
            </h2>
            <a
              className="contact-arrow"
              href={`mailto:${RESUME_DATA.email}`}
              aria-label="Email Pratik Sawant"
            >
              <ArrowUpRight size={45} strokeWidth={1.3} />
            </a>
          </div>
          <p>
            Have a role, a project, or an interesting problem in mind?
            <br />
            I’d love to hear about it.
          </p>
          <div className="contact-actions">
            <div className="email-group">
              <a className="contact-email" href={`mailto:${RESUME_DATA.email}`}>
                {RESUME_DATA.email}
              </a>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copyStatus === "Email copied" ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
            <button className="button button-outline" onClick={onOpenDossier}>
              Get my résumé <ArrowUpRight size={17} />
            </button>
          </div>
          <span className="copy-status" role="status">
            {copyStatus}
          </span>
        </Reveal>
        <div className="footer-bottom">
          <div>
            <a
              className="monogram"
              href="#home"
              aria-label="Pratik Sawant, home"
            >
              ps<span>.</span>
            </a>
            <span>
              Thoughtfully built by Pratik Sawant.
              <br />
              <small>© {new Date().getFullYear()} · Navi Mumbai, India</small>
            </span>
          </div>
          <div className="footer-links">
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pratik on GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pratik on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href="#home" className="back-to-top">
              Back to top <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
