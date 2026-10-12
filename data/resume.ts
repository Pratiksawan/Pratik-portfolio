export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  points: string[];
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface CompetencyGroup {
  id: string;
  domain: string;
  title: string;
  skills: string[];
  tagline: string;
}

export const RESUME_DATA = {
  name: "Pratik Sawant",
  title: "AI / Full Stack Systems Engineer",
  subtitle: "Concurrency & LLM Guardrails | 4+ Years Enterprise Production",
  email: "pratiksawant542@gmail.com",
  phone: "+91 7039603576",
  location: "Navi Mumbai, Maharashtra, India (IST / UTC+5:30)",
  github: "https://github.com/Pratiksawan",
  linkedin: "https://www.linkedin.com/in/pratik-sawant-52a162227",
  whatsapp: "https://wa.me/917039603576",

  summary:
    "High-concurrency systems engineer with 4+ years of experience bridging probabilistic AI reasoning (Google Gemini API & OpenAI ChatGPT API) with deterministic enterprise constraints. Proven production ownership across Avanse Financial Services (Sampark CRM & Meta Flows), Häfele GmbH (Global 24/7 Chatbot Mesh), LG Electronics (Emergency Triage & Data Consistency), and MotoDock (Multi-Tenant Auto Workshop ERP SaaS).",

  metrics: [
    {
      id: "01",
      label: "TOLERANCE / LATENCY",
      value: "<0.8ms",
      description: "Redis Cache In-Memory Evaluation",
    },
    {
      id: "02",
      label: "CONCURRENCY GAIN",
      value: "+40% Throughput",
      description: "Async Mutex & Worker Job Queues",
    },
    {
      id: "03",
      label: "ENTERPRISE TENURE",
      value: "4+ Years",
      description: "Mission-Critical Production Systems",
    },
  ] as MetricItem[],

  experiences: [
    {
      company: "SmartConnect Technologies",
      role: "Software Engineer",
      period: "Nov 2023 – Present",
      location: "Thane, India",
      badge: "ACTIVE PRODUCTION",
      points: [
        "Bridged AI services with conventional deterministic software systems across REST APIs, CRM integrations, webhooks, Redis, and asynchronous workers.",
        "Improved backend API throughput by 40% across client microservices through Redis caching and asynchronous job queues.",
        "Diagnosed and resolved critical production failure incidents for LG client systems, ensuring data consistency.",
        "Owned the Häfele GmbH chatbot platform in production with 99.98% availability and zero dropped webhooks.",
        "Engineered Meta WhatsApp Flows automation using dynamic Flow JSON, customer prefill, and secure webhook validation.",
        "Architected Sampark platform for Avanse Financial Services, powering dynamic loan verification workflows.",
      ],
    },
    {
      company: "Jain Info X",
      role: "Software Developer",
      period: "Apr 2023 – Jul 2023",
      location: "Belapur, India",
      points: [
        "Built responsive enterprise interfaces and integrated backend REST APIs for data-dense corporate workflows.",
        "Developed asynchronous PDF/Excel report export engines with zero main-thread event loop blocking.",
      ],
    },
    {
      company: "Tech Sierra",
      role: "Software Developer",
      period: "Dec 2021 – Mar 2023",
      location: "Thane, India (Remote)",
      points: [
        "Built full-stack applications and microservices using React.js, Node.js, and Express.js.",
        "Integrated ChatGPT API and NLU pipelines for multi-turn customer conversations and intent classification.",
        "Authored automated test suites (Jest / Mocha / Chai) achieving 99.5%+ test stability before client release cycles.",
      ],
    },
  ] as ExperienceItem[],

  competencies: [
    {
      id: "01",
      domain: "COGNITIVE & LLM",
      title: "AI Reasoning Stack",
      skills: [
        "Google Gemini API (1.5 Pro)",
        "OpenAI ChatGPT API",
        "Structured Outputs (Zod)",
        "Hinglish / English NLU",
        "Fallback Deterministic Gates",
      ],
      tagline: "PROMPTS BOUNDED BY CODE",
    },
    {
      id: "02",
      domain: "CONCURRENCY & IO",
      title: "Backend Microservices",
      skills: [
        "Node.js (v20 LTS) & TypeScript",
        "Redis 7 Distributed Locks",
        "BullMQ Asynchronous Queues",
        "Meta WhatsApp Cloud Flows",
        "Webhook Dead-Letter Queues",
      ],
      tagline: "SUB-MS TRANSACTION LOCKS",
    },
    {
      id: "03",
      domain: "PERSISTENCE & ACID",
      title: "Database Systems",
      skills: [
        "PostgreSQL 16 (RLS Engines)",
        "Prisma ORM & Raw SQL",
        "SQL Server / MSSQL",
        "MongoDB & Mongoose",
        "Connection Pool Governance",
      ],
      tagline: "ZERO DATA MUTATION LOSS",
    },
    {
      id: "04",
      domain: "ARCHITECTURE & DEVOPS",
      title: "Deployment & UI",
      skills: [
        "Next.js 15 / React 19 / Tailwind",
        "Docker Containerization",
        "Jest, Mocha & Chai Suites",
        "Vercel, Render & Railway",
        "Swagger / OpenAPI / SSL",
      ],
      tagline: "REPRODUCIBLE RUNTIMES",
    },
  ] as CompetencyGroup[],

  education: {
    degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
    institution: "MGM College of Computer Science & Information Technology, Kalamboli",
    graduation: "July 2021",
  },
};
