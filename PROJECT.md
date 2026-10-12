# Engineering Project Documentation: Pratik Sawant — AI / Full Stack Portfolio & Systems Architecture

**Document Version:** 2.4.0 (Synchronized with 2026 Updated Resume)  
**Author:** Pratik Sawant  
**Title:** AI / Full Stack Engineer | LLM Integrations | Node.js / TypeScript | 4+ Years  
**Contact:** [pratiksawant542@gmail.com](mailto:pratiksawant542@gmail.com) | +91 7039603576 | Navi Mumbai, Maharashtra, India  
**Profiles:** [LinkedIn](https://www.linkedin.com/in/pratik-sawant-52a162227) | [GitHub](https://github.com/pratiksawant542)  

---

## 1. Executive Summary & Engineering Positioning

This project represents the complete architectural design, engineering modernization, and technical documentation of **Pratik Sawant's professional portfolio and systems showcase**. 

The portfolio has been transformed from a traditional developer page into a **high-performance, production-grade 2026 SaaS engineering showcase** reflecting the design aesthetic of **Apple × Linear × Vercel**, completely synchronized with Pratik's updated **2-Page Professional Resume**.

### Core Technical Philosophy
> *"Probabilistic AI models provide revolutionary reasoning, but enterprise software requires deterministic guarantees."*

Pratik's core specialization sits at the intersection of **Generative AI models (Google Gemini API, OpenAI ChatGPT API)** and **deterministic, mission-critical backend systems (Node.js, TypeScript, PostgreSQL, Redis, Docker)**. His engineering ensures that generative AI outputs are bounded by strict schema validation, deterministic fallback routes, transaction-safe database concurrency, and sub-millisecond cache layers.

---

## 2. Resume Evolution & Detailed Changelog

The portfolio codebase was systematically refactored to align with Pratik's newly updated resume:

| Dimension | Previous Resume & Portfolio State | Updated 2026 Resume & Current Portfolio State |
| :--- | :--- | :--- |
| **Professional Title** | Full Stack Developer | **AI / Full Stack Engineer \| LLM Integrations \| Node.js / TypeScript** |
| **Experience Length** | 3+ Years | **4+ Years Production Experience (Dec 2021 – Present)** |
| **Flagship Project** | SmartInvoice AI / Basic WhatsApp Bot | **MotoDock – Multi-Tenant Auto Workshop ERP & AI SaaS** |
| **Key AI Capabilities** | Basic OpenAI API prompts & chat | **Google Gemini API, ChatGPT API, Hinglish/English NLU, Zod deterministic validation, fallback recovery, audio/text diagnostics** |
| **Architecture Focus** | MERN CRUD / Simple REST APIs | **Multi-tenant isolation, 5-Tier RBAC, transactional concurrency locks, collision-safe document generation, Redis mutex, terminal-state controls** |
| **Enterprise Footprint** | General SmartConnect mention | **Avanse Financial Services (Sampark & Meta Flows), Häfele GmbH (Chatbot lead), LG Electronics (Production failure triage & consistency)** |
| **Quantified Metrics** | Generic descriptions | **+40% backend throughput via Redis & async jobs, 99.5%+ test stability, 50%+ reduction in support triage time via AI** |
| **Frontend Language** | Basic portfolio layout | **2026 Modern SaaS: Plus Jakarta Sans + JetBrains Mono, Command Palette (`⌘K`), HeroUI Floating Dock, Sonner toasts, Dark/Light modes** |

---

## 3. Flagship Project Deep-Dive: MotoDock SaaS

**MotoDock** is a commercial-grade, multi-tenant B2B SaaS platform engineered for automotive workshops, multi-brand service centers, and fleet maintenance garages.

### 3.1 Technical Stack
- **Backend Runtime:** Node.js (v20 LTS), TypeScript (Strict Mode)
- **API Architecture:** RESTful microservices, event-driven webhooks, Zod schema validation
- **Database & ORM:** PostgreSQL 16 / SQL Server, Prisma ORM with automated migrations
- **AI Intelligence:** Google Gemini API (Multimodal text & audio complaint analysis, diagnostic reasoning, Hinglish NLU)
- **Caching & Locks:** Redis 7 (TTL distributed mutex, query result caching, session stores)
- **Containerization & Deployment:** Docker, Docker Compose, Render / Railway (Backend), Vercel (Frontend CI/CD)

### 3.2 System Architecture Diagram

```
+-------------------------------------------------------------------------------+
|                             CLIENT APPLICATION                                |
|  React 18 + TypeScript + Tailwind CSS | Role-Scoped Workshop UI & Portals     |
+-------------------------------------------------------------------------------+
                                      |
                                      v HTTPS / WSS
+-------------------------------------------------------------------------------+
|                            API GATEWAY / REVERSE PROXY                        |
|  - Rate Limiting (Token Bucket: 10,000 req/min)                               |
|  - JWT Authentication & 5-Tier RBAC Inspection                                |
|  - Tenant ID Header Verification & Request Context Binding                    |
+-------------------------------------------------------------------------------+
                                      |
               +----------------------+----------------------+
               |                                             |
               v                                             v
+-----------------------------+               +-------------------------------+
|  AI DIAGNOSTIC REASONING    |               |  CORE ERP TRANSACTION ENGINE  |
|  - Google Gemini API        |               |  - Job Card Lifecycle FSM     |
|  - Hinglish / English NLU   |               |  - Collision-Safe Doc Numbers |
|  - Probabilistic Extraction |               |  - Inventory Movement Manager |
|  - Zod Strict Schema Check  |               |  - GST & Estimate Calculator  |
+-----------------------------+               +-------------------------------+
               |                                             |
               v (Validated Heuristics)                      v (Transactional Operations)
+-------------------------------------------------------------------------------+
|                      DETERMINISTIC CONCURRENCY LAYER                          |
|  - Redis Mutex Locks (SETNX with TTL) for Flash Parts Allocation              |
|  - PostgreSQL Isolation Level: READ COMMITTED with SELECT FOR UPDATE          |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                          PERSISTENCE & STORAGE TIER                           |
|  PostgreSQL 16 (Multi-Tenant Row-Level Security, Tenant-Partitioned Tables)   |
|  Prisma ORM Connection Pool (Max Connections: 50, Idle Timeout: 10s)          |
+-------------------------------------------------------------------------------+
```

### 3.3 Key Technical Innovations in MotoDock

#### A. Deterministic Validation Around Probabilistic AI
LLMs are inherently probabilistic. In an auto workshop ERP, an invoice, part number, or labor cost cannot be arbitrary. Pratik built a **dual-gate deterministic pipeline**:
1. **Intake Gate:** Customer voice notes or technician notes in English, Hindi, or Hinglish (e.g., *"Gaddi 2000 RPM pe miss kar rahi hai aur highway pe average gir gaya"*) are passed to the Google Gemini API with system-enforced JSON schema instructions.
2. **Deterministic Fallback Gate:** If the LLM returns an unlisted part ID or out-of-range labor estimate, the engine intercepts the response via Zod validators and falls back to a deterministic heuristic table matching known symptoms to OEM repair catalogue items (e.g., *Hyundai Creta 1.5L Diesel Fuel Injector #3 / MAF Sensor Cleaning*).

#### B. Multi-Tenant Isolation & 5-Tier RBAC
Every database query is strictly scoped to the tenant's UUID context (`tenant_id`), preventing cross-workshop data bleed. The RBAC hierarchy enforces strict boundaries:
1. **Owner / Workshop Director:** Organization-wide financial telemetry, payroll, staff permissions, and master settings.
2. **Service Advisor:** Customer vehicle intake, job-card initialization, diagnostic review, customer estimate approval.
3. **Lead Mechanic:** Diagnostic execution, time tracking per labor item, part requisitions, inspection checklists.
4. **Parts Inventory Manager:** Vendor purchase orders, low-stock threshold alerts, warehouse bin assignments.
5. **Billing & Cashier:** GST tax invoice generation, payment gateway reconciliation, counter cash settlements.

#### C. Collision-Safe Document Numbering Under High Concurrency
Traditional auto-increment IDs fail when multiple advisors across branch bays submit job cards simultaneously. MotoDock uses an atomic counter sequence in Redis and PostgreSQL:
```sql
-- Atomic sequence generation ensuring zero gaps and zero duplicate IDs
CREATE OR REPLACE FUNCTION generate_job_number(p_tenant_id UUID, p_prefix VARCHAR)
RETURNS VARCHAR AS $$
DECLARE
  v_year VARCHAR := TO_CHAR(CURRENT_DATE, 'YYYY');
  v_seq INT;
BEGIN
  INSERT INTO document_sequences (tenant_id, doc_type, fiscal_year, current_val)
  VALUES (p_tenant_id, p_prefix, v_year, 1)
  ON CONFLICT (tenant_id, doc_type, fiscal_year)
  DO UPDATE SET current_val = document_sequences.current_val + 1
  RETURNING current_val INTO v_seq;
  
  RETURN p_prefix || '-' || v_year || '-' || LPAD(v_seq::TEXT, 5, '0');
END;
$$ LANGUAGE plpgsql;
```

#### D. Terminal-State Finite State Machine (FSM)
Job cards adhere to a strict unidirectional FSM:
`DRAFT` -> `ESTIMATED` -> `APPROVED` -> `IN_PROGRESS` -> `QUALITY_CHECK` -> `INVOICED` -> `SETTLED` (Terminal State).  
Once a job card enters `SETTLED`, database triggers revoke edit mutations, preventing backdated financial tampering.

---

## 4. Enterprise Client Engineering & Production Track Record

### 4.1 SmartConnect Technologies (Nov 2023 – Present) | Software Engineer
- **Avanse Financial Services (Sampark Platform):**
  - Sole lead engineer for Sampark, an enterprise onboarding and loan-verification platform.
  - Implemented Meta WhatsApp Flows with dynamic JSON schemas prefilled with customer banking details directly inside WhatsApp.
  - Integrated Redis caching layer serving loan eligibility calculations in **<0.8ms**.
  - Engineered circuit breaker fallbacks with exponential backoff for upstream core banking APIs.
- **Häfele GmbH & Co KG (Chatbot Platform Ownership):**
  - Complete production ownership of Häfele's customer and dealer chatbot platform.
  - Debugged critical backend bottlenecks, monitored webhook delivery queues, and achieved **99.98% platform uptime**.
- **LG Electronics (Production Failure Resolution):**
  - Diagnosed and resolved critical production failure incidents on client-facing backend systems.
  - Implemented transactional data-consistency safeguards without breaking backward compatibility with legacy microservices.
- **Performance Optimization Across Microservices:**
  - Boosted API throughput and response latency by **40%** through selective Redis caching and asynchronous message queues.

### 4.2 Jain Info X (Apr 2023 – Jul 2023) | Software Developer
- Developed data-dense responsive enterprise interfaces and integrated backend REST APIs.
- Engineered asynchronous PDF/Excel financial report generators handling thousands of database rows without event-loop starvation.

### 4.3 Tech Sierra (Dec 2021 – Mar 2023) | Software Developer
- Engineered full-stack React.js and Node.js enterprise microservices.
- Built NLU intent recognition pipelines using OpenAI ChatGPT API for customer conversation handling.
- Authored automated test suites (Jest / Mocha / Chai) achieving **99.5%+ test stability** across sprint releases.

---

## 5. Frontend Design System & UX Architecture: Swiss Architectural Patent & Blueprint

The portfolio has adopted the **Swiss Editorial × Architectural Patent Specification** design language (retrieved directly from the Stitch MCP project **"Modern Portfolio Showcase"** & screen `d675e682cab241d7a454e2355eb99be2`):

### 5.1 Design Tokens & Blueprint Specimen Palette
- **Blueprint Paper Canvas:** `#f8f8f5` (Authentic off-white architectural specimen background)
- **Blueprint Solid Surface:** `#ffffff` with high-contrast `#0c0d10` technical rules
- **Blueprint Ink:** `#0c0d10` (Precision technical typography & drafting lines)
- **Blueprint Azure:** `#0038e0` (Primary technical callout, active states & highlight rules)
- **Blueprint Cobalt:** `#0020a3` (Hover interaction elevation)
- **Patent Seal Green:** `#0f766e` (ACID verified database status & production uptime indicator)
- **Patent Barrier Red:** `#d92323` (Strict type boundary & Zod validation shields)
- **Technical Typography:** `Instrument Serif` (Headline contrast) + `JetBrains Mono` (System telemetry, code & claims) + `Plus Jakarta Sans` (Swiss editorial body copy)
- **Micro-Grid System:** Continuous 20px & 16px technical graph paper background (`.blueprint-grid` & `.blueprint-subgrid`) with dimensional tick marks (`.dim-line-h`)

### 5.2 Interactive Architectural Components
1. **Official Patent Specimen Header & Registry Ribbon:**
   - Registration metadata (`SPEC-DOC: PS-2026-AI-RLS`, `CLASS: 706/12`, `INVENTOR: PRATIK SAWANT`, `FILED: AP-SOUTH-1`).
   - Crosshair technical stamp monogram (`PS` with `⊕` coordinate marks).
2. **FIG 1.0 MotoDock Automotive Vernacular AI Engine (CAD Schematic):**
   - High-density blueprint card detailing 5-tier RBAC, Postgres Row-Level Security, and monotonic sequence locks.
   - **Interactive Reasoning Simulator:** 3-case NLU transduction engine cycling live through Hinglish customer complaints (Creta Diesel, Swift DualJet, Nexon EV Max), simulated inference latency (378ms–412ms), and Zod-typed repair JSON outputs.
3. **Certified Production Ledger:**
   - Audited enterprise deployment records for Avanse Financial Services (Sampark), Häfele GmbH & Co KG (Global Mesh), and LG Electronics (Emergency Triage).
4. **FIG 2.0 Isolation Topology (6-Stage Pipeline Schematic):**
   - Isometric visual flow: Client Tier &rarr; Gateway RBAC &rarr; Gemini NLU &rarr; Zod Shield &rarr; Redis Mutex &rarr; Postgres 16 ACID.
5. **Section 05 Exhibit 'A' Code Artifact:**
   - Complete production PL/pgSQL function (`generate_atomic_invoice_seq`) with one-click clipboard copy and custom toast notifications.
6. **Executive Engineering Dossier (Inspection Drawer / Resume Modal):**
   - Full verified resume view matching the 2-page document, complete with print-optimized CSS for 1-click PDF export, direct email dispatch, and WhatsApp routing.
   - Accessible via keyboard shortcut `[⌘K]` / `[Ctrl+K]` or on-screen inspection buttons.

---

## 6. Codebase File Structure & Inventory (Next.js 15 App Router)

```
G:\Pratik Job\Pratik Protfolio\
├── PROJECT.md                      <- Master technical documentation (Root copy)
├── portfolio\
│   ├── app\
│   │   ├── layout.tsx              <- Root layout (Instrument Serif, JetBrains Mono, Plus Jakarta Sans)
│   │   ├── page.tsx                <- Main client page (composing all blueprint sections, state & ⌘K)
│   │   └── globals.css             <- Tailwind base, micro-grid, custom scrollbar, print styles
│   ├── components\
│   │   ├── Header.tsx              <- Top registry ribbon, PS crosshairs stamp, navigation, ⌘K trigger
│   │   ├── MetaBanner.tsx          <- Broadsheet patent meta header (US-2026/0402-A1)
│   │   ├── HeroSpecimen.tsx        <- "The Bounded Intelligence Specimen" + abstract card
│   │   ├── MotoDockSimulator.tsx   <- FIG 1.0 CAD blueprint + live Hinglish NLU diagnostic simulator
│   │   ├── ProductionLedger.tsx    <- Section 03 certified production ledger (Avanse, Häfele, LG)
│   │   ├── IsolationPipeline.tsx   <- FIG 2.0 6-stage cognitive barrier isolation schematic
│   │   ├── SqlExhibit.tsx          <- Section 05 PL/pgSQL atomic sequence artifact with copy toast
│   │   ├── CompetencyTaxonomy.tsx  <- Section 06 4-pillar stack taxonomy + MGM College CS degree
│   │   ├── Footer.tsx              <- Broadsheet impressum, telegraph, dispatch actions
│   │   └── InspectionDossier.tsx   <- Tactile resume drawer modal with 1-click PDF/Print
│   ├── data\
│   │   ├── resume.ts               <- Type-safe data for 2-page resume, metrics, enterprise roles
│   │   └── diagnostics.ts          <- Structured Hinglish vehicle cases, latency, and BOM JSON
│   ├── package.json                <- Next.js 15.2, React 19, TypeScript, Tailwind CSS, Lucide, Framer Motion
│   ├── tsconfig.json               <- Strict TypeScript configuration with @/* path aliases
│   ├── next.config.ts              <- Next.js configuration
│   ├── tailwind.config.ts          <- Blueprint design token palette (paper, ink, azure, cobalt)
│   ├── postcss.config.mjs          <- PostCSS Tailwind configuration
│   └── PROJECT.md                  <- Master technical documentation (Portfolio directory copy)
└── smart-invoice-ai\               <- Standalone SmartInvoice AI prototype project
```

---

## 7. Verified Metrics & Quantitative Impact

- **4+ Years:** Enterprise software engineering across AI, Node.js, TypeScript, and microservices.
- **+40% Throughput:** Quantified latency and throughput improvement across production microservices via Redis caching and async worker queues.
- **99.5%+ Test Stability:** Jest and Mocha unit and integration test pass rate maintained before release cycles.
- **50%+ Support Triage Reduction:** Measured reduction in customer triage and job-card preparation times through Generative AI automation.
- **65% Autonomous Resolution:** AI customer support chatbot query resolution rate without human intervention.
- **<0.8ms Latency:** In-memory Redis cache retrieval time for loan qualification decisions.
- **99.98% Uptime:** Maintained across Häfele GmbH and Avanse Financial production platforms.

---

## 8. Local Setup & Verification

### Running the Portfolio
The portfolio is built with **Next.js 15 (App Router)** and **React 19**:

```powershell
# Install dependencies
cd "G:\Pratik Job\Pratik Protfolio\portfolio"
npm install

# Start development server and automatically launch default browser:
npm run dev
# (Automatically opens your default browser to http://localhost:3000)

# Build production bundle:
npm run build

# Start production server:
npm start
```

### Production Deployment
- **Vercel:** Connect the GitHub/GitLab repository; Next.js 15 builds automatically with zero configuration.
- **Render / Railway / Docker:** Use `npm run build` followed by `npm start`.

---

*End of Documentation — Maintained by Pratik Sawant (AI / Full Stack Engineer)*
