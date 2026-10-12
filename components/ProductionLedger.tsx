"use client";

import { ArrowUpRight, Braces, Lightbulb, ShieldCheck } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Reveal from "./Reveal";

export default function ProductionLedger() {
  return (
    <section id="about" className="section section-anchor about-section">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-intro">
            <span className="eyebrow">
              <span className="section-number">02 /</span> THE PERSON BEHIND THE
              CODE
            </span>
            <h2>
              Curiosity drives me.
              <br />
              <span className="text-muted">Craft defines me.</span>
            </h2>
            <p>
              I’m a full stack engineer based in Navi Mumbai, with 4+ years
              spent building software that people and businesses depend on.
            </p>
            <p>
              My sweet spot is where AI meets real-world constraints: useful
              intelligence, reliable backends, and interfaces that make the
              complex feel simple.
            </p>
            <a href={`mailto:${RESUME_DATA.email}`} className="text-button">
              Let’s talk engineering <ArrowUpRight size={16} />
            </a>
          </Reveal>
          <Reveal className="principles" delay={0.1}>
            <div>
              <span className="principle-icon">
                <Lightbulb size={20} />
              </span>
              <div>
                <h3>Start with the problem.</h3>
                <p>
                  Understand the people, the constraints, and what a better
                  outcome actually looks like.
                </p>
              </div>
              <span>01</span>
            </div>
            <div>
              <span className="principle-icon">
                <Braces size={20} />
              </span>
              <div>
                <h3>Build with intention.</h3>
                <p>
                  Clear contracts, thoughtful architecture, and AI with
                  guardrails from day one.
                </p>
              </div>
              <span>02</span>
            </div>
            <div>
              <span className="principle-icon">
                <ShieldCheck size={20} />
              </span>
              <div>
                <h3>Own it in production.</h3>
                <p>
                  Reliability is part of the product. Measure, debug, and keep
                  making it better.
                </p>
              </div>
              <span>03</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="experience-header">
          <h3>A few chapters of my journey.</h3>
          <span className="eyebrow">2021 — PRESENT</span>
        </Reveal>
        <div className="experience-list">
          {RESUME_DATA.experiences.map((experience, index) => (
            <Reveal
              className="experience-row"
              key={experience.company}
              delay={index * 0.05}
            >
              <div className="experience-time">
                <span
                  className={
                    index === 0 ? "timeline-dot current" : "timeline-dot"
                  }
                />
                <span>{experience.period}</span>
                {index === 0 && <small>CURRENT CHAPTER</small>}
              </div>
              <div className="experience-role">
                <h4>{experience.company}</h4>
                <span>
                  {experience.role} · {experience.location}
                </span>
              </div>
              <p>
                {index === 0
                  ? "Building AI integrations, enterprise workflows, and reliable backend systems for Avanse, Häfele, and LG. Improved API throughput by 40% through caching and asynchronous workers."
                  : index === 1
                    ? "Developed responsive enterprise interfaces and asynchronous PDF / Excel report exports for data-intensive business workflows."
                    : "Built React and Node.js applications, integrated ChatGPT conversation pipelines, and maintained test suites with 99.5%+ stability."}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
