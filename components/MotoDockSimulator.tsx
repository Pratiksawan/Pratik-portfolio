"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Layers3,
  LoaderCircle,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { DIAGNOSTIC_CASES } from "@/data/diagnostics";
import { RESUME_DATA } from "@/data/resume";
import Reveal from "./Reveal";

const projectDetails = {
  sampark: [
    "Dynamic Meta WhatsApp Flow screens and customer prefill.",
    "Redis-backed loan pre-qualification with <0.8ms cache evaluation.",
    "Secure webhook validation and applicant session isolation.",
  ],
  hafele: [
    "Multi-catalog conversational routing for customers and dealers.",
    "Webhook consumers with exponential backoff and retry queues.",
    "Production platform ownership with 99.98% availability.",
  ],
};

export default function MotoDockSimulator() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [details, setDetails] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentCase = DIAGNOSTIC_CASES[caseIndex];

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const runSample = () => {
    setIsRunning(true);
    setHasRun(false);
    timer.current = setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 1100);
  };
  const toggleDetails = (project: string) =>
    setDetails(details === project ? null : project);

  return (
    <section id="work" className="section section-anchor">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="section-number">01 /</span> SELECTED WORK
            </span>
            <h2>
              Built to solve.
              <br />
              <span className="text-muted">Designed to last.</span>
            </h2>
          </div>
          <p>
            A few things I’ve built, owned, and made better.
            <br />
            Real problems. Thoughtful engineering.
          </p>
        </Reveal>

        <Reveal className="featured-project">
          <div className="project-story">
            <div className="project-kicker">
              <span className="project-icon">
                <CarFront size={21} />
              </span>
              <span>FEATURED PROJECT</span>
              <span className="project-index">01</span>
            </div>
            <h3>
              MotoDock<span className="lime-period">.</span>
            </h3>
            <p className="project-subtitle">
              A smarter operating system for workshops.
            </p>
            <p className="project-description">
              From a mechanic’s Hinglish complaint to a structured repair
              estimate. An AI-powered, multi-tenant ERP that connects workshop
              operations with dependable software.
            </p>
            <div className="project-outcomes">
              <div>
                <ShieldCheck size={17} />
                <span>AI outputs validated before database writes</span>
              </div>
              <div>
                <Layers3 size={17} />
                <span>Tenant isolation & five-tier role access</span>
              </div>
              <div>
                <Workflow size={17} />
                <span>Transaction-safe job card & invoice workflows</span>
              </div>
            </div>
            <div className="tags">
              <span>TypeScript</span>
              <span>Gemini</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
            </div>
            <button
              className="text-button"
              aria-expanded={details === "motodock"}
              aria-controls="motodock-details"
              onClick={() => toggleDetails("motodock")}
            >
              Under the hood{" "}
              <ChevronDown
                size={16}
                className={details === "motodock" ? "rotate-icon" : ""}
              />
            </button>
            {details === "motodock" && (
              <div id="motodock-details" className="project-detail">
                <p>
                  Structured AI output passes through Zod validation and
                  deterministic fallback rules. PostgreSQL transaction controls
                  protect document numbering, while terminal-state restrictions
                  prevent changes to settled job cards.
                </p>
              </div>
            )}
          </div>

          <div className="demo-wrap">
            <div className="demo-window">
              <div className="window-bar">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>motodock / diagnostic studio</span>
                <span className="demo-label">SAMPLE DEMO</span>
              </div>
              <div className="demo-content">
                <div className="demo-heading">
                  <div>
                    <span className="eyebrow">WORKSHOP INTELLIGENCE</span>
                    <h4>Turn a complaint into clarity.</h4>
                  </div>
                  <span className="demo-spark">
                    <Sparkles size={21} />
                  </span>
                </div>
                <label htmlFor="vehicle-case" className="demo-field-label">
                  01 — Choose a sample vehicle
                </label>
                <select
                  id="vehicle-case"
                  className="vehicle-select"
                  disabled={isRunning}
                  value={caseIndex}
                  onChange={(event) => {
                    setCaseIndex(Number(event.target.value));
                    setHasRun(false);
                  }}
                >
                  {DIAGNOSTIC_CASES.map((item, index) => (
                    <option key={item.id} value={index}>
                      {item.vehicle}
                    </option>
                  ))}
                </select>
                <div className="complaint">
                  <MessageSquare size={17} />
                  <p>“{currentCase.complaint}”</p>
                </div>
                <div className="processing-flow" aria-hidden="true">
                  <span className={hasRun ? "flow-complete" : ""}>
                    <Sparkles size={13} /> Understand
                  </span>
                  <ArrowRight size={12} />
                  <span className={hasRun ? "flow-complete" : ""}>
                    <ShieldCheck size={13} /> Validate
                  </span>
                  <ArrowRight size={12} />
                  <span className={hasRun ? "flow-complete" : ""}>
                    <CheckCircle2 size={13} /> Structure
                  </span>
                </div>
                <button
                  className="button button-lime demo-run"
                  onClick={runSample}
                  disabled={isRunning}
                >
                  {isRunning ? (
                    <LoaderCircle size={15} className="spin-icon" />
                  ) : (
                    <Play size={14} fill="currentColor" />
                  )}
                  {isRunning
                    ? "Processing sample…"
                    : hasRun
                      ? "Run sample again"
                      : "Run diagnostic sample"}
                  <span>↵</span>
                </button>
                <div
                  className="demo-result"
                  aria-live="polite"
                  aria-atomic="true"
                  aria-busy={isRunning}
                >
                  <AnimatePresence mode="wait">
                    {hasRun ? (
                      <motion.div
                        key={currentCase.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="result-content"
                      >
                        <div className="result-status">
                          <span>
                            <span className="status-dot" /> Structured result
                          </span>
                          <span>SCHEMA VALID</span>
                        </div>
                        {currentCase.predictions.map((prediction) => (
                          <div
                            className="prediction-row"
                            key={prediction.component}
                          >
                            <span>
                              {prediction.component}
                              <small>{prediction.fault}</small>
                            </span>
                            <span className="confidence">
                              {Math.round(prediction.confidence * 100)}% match
                            </span>
                          </div>
                        ))}
                        <div className="estimate-row">
                          <span>
                            Parts estimate{" "}
                            <small>Labor billed separately</small>
                          </span>
                          <strong>
                            ₹
                            {currentCase.deterministic_total_inr.toLocaleString(
                              "en-IN",
                            )}
                          </strong>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="result-placeholder"
                      >
                        <Code2 size={21} />
                        <span>
                          {isRunning
                            ? "Validating the sample output…"
                            : "Your structured result will appear here."}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <p className="demo-footnote">
                  Illustrative demo using predefined cases. No live AI request.
                </p>
              </div>
            </div>
            <span className="demo-caption">
              <span className="status-dot" /> LESS GUESSWORK. MORE RELIABLE
              WORKFLOWS.
            </span>
          </div>
        </Reveal>

        <div className="project-pair">
          <Reveal className="small-project" delay={0.05}>
            <div className="project-preview preview-sampark" aria-hidden="true">
              <div className="preview-top">
                <span>
                  S<span className="lime-period">.</span> sampark
                </span>
                <span>AVANSE FINANCIAL SERVICES</span>
              </div>
              <div className="flow-mock">
                <div>
                  <span className="mock-step">01</span>
                  <MessageSquare size={19} />
                  <span>Customer intake</span>
                  <Check size={14} />
                </div>
                <div className="mock-connector" />
                <div>
                  <span className="mock-step">02</span>
                  <ShieldCheck size={19} />
                  <span>Eligibility checks</span>
                  <Check size={14} />
                </div>
                <div className="mock-connector" />
                <div>
                  <span className="mock-step">03</span>
                  <Workflow size={19} />
                  <span>Verified workflow</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <span className="preview-note">ILLUSTRATIVE WORKFLOW</span>
            </div>
            <div className="small-project-body">
              <div className="small-project-meta">
                <span>FINTECH · CLIENT WORK</span>
                <span>02</span>
              </div>
              <h3>
                Sampark <span>by Avanse</span>
              </h3>
              <p>
                Making loan verification simpler with conversational workflows,
                dynamic WhatsApp screens, and fast Redis-backed checks.
              </p>
              <div className="tags">
                <span>Node.js</span>
                <span>WhatsApp Flows</span>
                <span>Redis</span>
              </div>
              <button
                className="text-button"
                onClick={() => toggleDetails("sampark")}
                aria-expanded={details === "sampark"}
                aria-controls="sampark-details"
              >
                Explore the engineering <ArrowUpRight size={16} />
              </button>
              {details === "sampark" && (
                <ul className="project-detail" id="sampark-details">
                  {projectDetails.sampark.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
          <Reveal className="small-project" delay={0.12}>
            <div className="project-preview preview-hafele" aria-hidden="true">
              <div className="preview-top">
                <span className="hafele-logo">Häfele</span>
                <span>CUSTOMER & DEALER SUPPORT</span>
              </div>
              <div className="chat-mock">
                <div className="chat-bubble chat-user">
                  Help me find the right hardware.
                </div>
                <div className="chat-bubble chat-assistant">
                  <span className="chat-avatar">
                    <Sparkles size={15} />
                  </span>
                  <div>
                    Let’s find what fits your project.
                    <span className="chat-options">
                      Product discovery <ArrowRight size={12} />
                      <br />
                      Dealer routing <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="chat-status">
                  <span className="status-dot" /> Always-on customer workflows
                </div>
              </div>
              <span className="preview-note">ILLUSTRATIVE INTERFACE</span>
            </div>
            <div className="small-project-body">
              <div className="small-project-meta">
                <span>CONVERSATIONAL AI · CLIENT WORK</span>
                <span>03</span>
              </div>
              <h3>
                Häfele <span>conversational platform</span>
              </h3>
              <p>
                Reliable customer and dealer conversations, powered by resilient
                webhooks, catalog routing, and production ownership.
              </p>
              <div className="tags">
                <span>Webhooks</span>
                <span>Retry queues</span>
                <span>Node.js</span>
              </div>
              <button
                className="text-button"
                onClick={() => toggleDetails("hafele")}
                aria-expanded={details === "hafele"}
                aria-controls="hafele-details"
              >
                Explore the engineering <ArrowUpRight size={16} />
              </button>
              {details === "hafele" && (
                <ul className="project-detail" id="hafele-details">
                  {projectDetails.hafele.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>
        <Reveal className="work-footer">
          <span>Curious about what else I’m building?</span>
          <a
            className="text-button"
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me on GitHub <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
