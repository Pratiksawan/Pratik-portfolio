"use client";

import {
  Braces,
  Container,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Reveal from "./Reveal";

const stack = [
  { icon: Braces, title: "TypeScript", category: "THE EVERYDAY LANGUAGE" },
  {
    icon: Layers3,
    title: "React & Next.js",
    category: "THOUGHTFUL INTERFACES",
  },
  { icon: Server, title: "Node.js", category: "SCALABLE BACKENDS" },
  { icon: Cpu, title: "Gemini & OpenAI", category: "BOUNDED INTELLIGENCE" },
  { icon: Database, title: "PostgreSQL", category: "RELIABLE DATA" },
  { icon: Workflow, title: "Redis & BullMQ", category: "FAST, ASYNC SYSTEMS" },
  { icon: Container, title: "Docker", category: "REPEATABLE DEPLOYMENTS" },
  { icon: Braces, title: "Jest & Mocha", category: "CONFIDENCE IN THE CODE" },
];

export default function CompetencyTaxonomy() {
  return (
    <section id="stack" className="section section-anchor stack-section">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="section-number">03 /</span> MY TOOLKIT
            </span>
            <h2>
              The right tools.
              <br />
              <span className="text-muted">For the right reasons.</span>
            </h2>
          </div>
          <p>
            A practical stack for turning an idea
            <br />
            into something people can rely on.
          </p>
        </Reveal>
        <div className="stack-grid">
          {stack.map(({ icon: Icon, title, category }, index) => (
            <Reveal
              key={title}
              className="stack-card"
              delay={(index % 4) * 0.04}
            >
              <span className="stack-card-number">0{index + 1}</span>
              <Icon className="stack-icon" size={27} strokeWidth={1.5} />
              <h3>{title}</h3>
              <span className="eyebrow">{category}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="education">
          <GraduationCap size={24} />
          <div>
            <span className="eyebrow">THE FOUNDATION</span>
            <p>{RESUME_DATA.education.degree}</p>
            <span>{RESUME_DATA.education.institution}</span>
          </div>
          <span className="education-year">Class of 2021</span>
        </Reveal>
      </div>
    </section>
  );
}
