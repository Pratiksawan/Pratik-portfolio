"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Reveal from "./Reveal";
import SystemSculpture from "./SystemSculpture";

export default function HeroSpecimen({
  onOpenDossier,
}: {
  onOpenDossier: () => void;
}) {
  return (
    <section id="home" className="hero section-anchor">
      <div className="container">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" /> AI / FULL STACK ENGINEER
            </div>
            <h1>
              Human ideas.
              <br />
              <span>Intelligent</span>
              <br />
              systems<span className="lime-period">.</span>
            </h1>
            <p className="hero-description">
              Hey, I’m <strong>Pratik</strong>. I turn complex problems into
              thoughtful software — connecting AI, scalable backends, and
              experiences that just work.
            </p>
            <div className="hero-buttons">
              <a href="#work" className="button button-lime">
                Explore my work <ArrowDownRight size={19} />
              </a>
              <button className="button button-ghost" onClick={onOpenDossier}>
                View résumé <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="hero-socials">
              <a
                href={RESUME_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a
                href={RESUME_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
              </a>
              <span className="hero-location">Navi Mumbai, India</span>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.15}>
            <SystemSculpture />
          </Reveal>
        </div>
        <Reveal className="hero-bottom" delay={0.2}>
          <div className="hero-metrics">
            <div>
              <strong>
                4<span>+</span>
              </strong>
              <span>
                Years building
                <br />
                production software
              </span>
            </div>
            <div>
              <strong>
                40<span>%</span>
              </strong>
              <span>
                Backend throughput
                <br />
                improvement
              </span>
            </div>
            <div>
              <strong>
                99.98<span>%</span>
              </strong>
              <span>
                Häfele platform
                <br />
                availability
              </span>
            </div>
          </div>
          <a href="#work" className="scroll-cue">
            <span>
              A LITTLE SCROLL.
              <br />A LOT TO DISCOVER.
            </span>
            <span className="scroll-circle">
              <ArrowDown size={18} />
            </span>
          </a>
        </Reveal>
      </div>
      <div className="client-strip">
        <div className="container client-inner">
          <span className="eyebrow">ENGINEERED FOR REAL-WORLD IMPACT</span>
          <div>
            <span>
              Avanse<span className="client-sub">FINANCIAL SERVICES</span>
            </span>
            <span className="hafele-logo">Häfele</span>
            <span className="lg-logo">
              LG <small>Electronics</small>
            </span>
            <span className="motodock-logo">
              MotoDock
              <ArrowUpRight className="lime-period" size={17} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
