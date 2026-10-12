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

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  stack: string;
  points: string[];
}

export interface KeyStrength {
  title: string;
  description: string;
}

export const RESUME_DATA = {
  name: "Pratik Sawant",
  title: "AI / Full Stack Engineer",
  subtitle: "LLM Integrations | Node.js / TypeScript | 4+ Years",
  email: "pratiksawant542@gmail.com",
  phone: "+91 7039603576",
  location: "Navi Mumbai, India",
  github: "https://github.com/Pratiksawan",
  linkedin: "https://www.linkedin.com/in/pratik-sawant-b82782214",
  whatsapp: "https://wa.me/917039603576",
  resumePdf: "/Pratik_Sawant_Resume.pdf",

  summary:
    "Full Stack / AI Engineer with 4+ years of software engineering experience building and operating production web systems, microservices, SaaS platforms, conversational AI, and enterprise automations. Hands-on experience integrating Google Gemini and ChatGPT APIs into commercial systems, designing deterministic validation and fallback paths around probabilistic AI, and owning systems from architecture and API integration through deployment, testing, debugging, and production support. Strong TypeScript/Node.js foundation with practical experience in Redis caching, asynchronous processing, webhooks, CI/CD, observability-oriented debugging, authentication, data isolation, and concurrency controls.",

  metrics: [
    {
      id: "01",
      label: "EXPERIENCE",
      value: "4+",
      description: "Years building production software",
    },
    {
      id: "02",
      label: "CONCURRENCY & THROUGHPUT",
      value: "+40%",
      description: "Backend throughput gain via Redis & async queues",
    },
    {
      id: "03",
      label: "PRODUCTION AVAILABILITY",
      value: "99.98%",
      description: "Häfele platform sustained uptime",
    },
    {
      id: "04",
      label: "LATENCY TOLERANCE",
      value: "<0.8ms",
      description: "Redis in-memory evaluation latency",
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
        "Worked across AI services, REST APIs, CRM integrations, webhooks, Redis, asynchronous processing, and production microservices, bridging AI capabilities with conventional deterministic software systems.",
        "Diagnosed and resolved critical production failures across LG client systems, implementing backend and data-consistency improvements while maintaining compatibility with existing production infrastructure.",
        "Improved API response time and backend throughput by 40% across client microservices through Redis caching and asynchronous job processing, reducing latency and improving system scalability under concurrent workloads.",
        "Owned the Hafele GmbH chatbot platform in production, driving feature development, troubleshooting production failures, resolving backend bottlenecks, and maintaining system reliability.",
        "Built production WhatsApp automation using Meta WhatsApp Flows, Node.js webhooks, and dynamic Flow JSON, implementing field-level validation, customer-data prefill, and real-time form submission processing.",
        "Designed deterministic workflow controls around AI-driven interactions, using API validation, structured business workflows, fallback handling, and controlled routing rather than relying solely on probabilistic model responses.",
        "Engineered and productionized a conversational AI system for Avanse Financial Services, handling education-loan queries, pending loan balances, foreclosure processing, and applicant ticket routing through dynamic REST APIs.",
        "Architected and developed Sampark, a Node.js platform integrated with Avanse Financial Services CRM, enabling dynamic loan-verification workflows through API-driven orchestration and business-rule validation.",
        "Owned the end-to-end engineering lifecycle of production AI-enabled systems, covering architecture, backend implementation, API integration, deployment, production debugging, and ongoing reliability improvements.",
      ],
    },
    {
      company: "Jain Info X",
      role: "Software Developer",
      period: "Apr 2023 – Jul 2023",
      location: "Belapur, India",
      points: [
        "Built responsive enterprise interfaces and integrated REST APIs for data-heavy business workflows.",
        "Developed Excel/PDF reporting export engines and asynchronous AJAX workflows for corporate users.",
      ],
    },
    {
      company: "Tech Sierra",
      role: "Software Developer",
      period: "Dec 2021 – Mar 2023",
      location: "Thane, India (Remote)",
      points: [
        "Built full-stack applications using React.js, Node.js, and Express.js, partnering with senior architects on enterprise systems.",
        "Integrated ChatGPT API and NLU pipelines for intent recognition and multi-turn customer conversations.",
        "Built Jest/Mocha test suites and resolved backend defects, achieving 99.5%+ test stability before client releases.",
        "Contributed to database schema design and API documentation.",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "motodock",
      title: "MotoDock – Multi-Tenant Auto Workshop ERP & AI SaaS",
      subtitle: "Enterprise B2B SaaS with AI Diagnostic Reasoning",
      stack:
        "Node.js, TypeScript, React, Prisma, PostgreSQL/SQL Server, Gemini, Docker",
      points: [
        "Architected a multi-tenant B2B SaaS platform for workshop job cards, estimates, inventory, billing, and technician workflows.",
        "Integrated Google Gemini for automotive diagnostic reasoning, English/Hinglish complaint summarization, and predictive revenue analysis, with automated fallback resilience and in-memory caching.",
        "Built deterministic controls around critical workflows: tenant isolation, RBAC across five roles, transactional concurrency locks, retry wrappers, and business-invariant enforcement.",
        "Implemented collision-safe document numbering under concurrent traffic and terminal-state controls for completed job cards and invoice reconciliation.",
        "Configured automated database migrations and CI/CD deployment across Render/Railway with frontend deployment on Vercel.",
      ],
    },
    {
      id: "whatsapp-chatbot",
      title: "WhatsApp Business Chatbot Platform",
      subtitle: "Dynamic Meta Flows & Stateful Recovery",
      stack:
        "Node.js, Express.js, Meta WhatsApp Cloud API, Webhooks, MySQL, Redis",
      points: [
        "Engineered an enterprise chatbot with dynamic interactive screens using Meta Flow JSON architecture.",
        "Implemented stateful conversational branching with automated fallback recovery and retry logic for upstream API timeouts.",
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce Web Application",
      subtitle: "High-Concurrency Marketplace with Transaction Locks",
      stack: "MERN, Redis, Docker, Razorpay",
      points: [
        "Built a production-style marketplace with JWT/RBAC, payment webhooks, Redis caching, and transaction-based inventory locking to prevent overselling.",
      ],
    },
  ] as ProjectItem[],

  strengths: [
    {
      title: "Production ownership",
      description:
        "Architecture → implementation → deployment → debugging → post-launch reliability.",
    },
    {
      title: "AI reliability mindset",
      description:
        "Deterministic validation, retries, fallbacks, caching, and business-rule enforcement around LLM-powered components.",
    },
    {
      title: "Systems tradeoffs",
      description:
        "Practical experience reducing latency/throughput costs through caching and asynchronous processing.",
    },
    {
      title: "Enterprise integration",
      description:
        "CRM, WhatsApp, REST APIs, webhooks, databases, authentication, and multi-tenant infrastructure.",
    },
    {
      title: "AI automation impact",
      description:
        "Generative AI integrations across commercial projects, with reported reduction of manual customer support and triage time by 50%+.",
    },
  ] as KeyStrength[],

  competencies: [
    {
      id: "01",
      domain: "AI / LLM & REASONING",
      title: "AI & LLM Engineering",
      skills: [
        "Google Gemini API",
        "ChatGPT API",
        "Conversational AI / NLU",
        "Prompt / Context Integration",
        "AI Fallback Design",
        "Multilingual Summarization",
      ],
      tagline: "PROBABILISTIC AI BOUNDED BY CODE",
    },
    {
      id: "02",
      domain: "LANGUAGES & RUNTIMES",
      title: "Languages & Frameworks",
      skills: ["TypeScript", "JavaScript (ES6+)", "Node.js", "C#", "React.js", "Next.js 15"],
      tagline: "TYPE-SAFE ENTERPRISE PLATFORMS",
    },
    {
      id: "03",
      domain: "BACKEND & ARCHITECTURE",
      title: "Backend & Concurrency",
      skills: [
        "Node.js & Express.js",
        "REST APIs & Microservices",
        "Event/Webhook-Driven Integrations",
        "Multi-Tenant SaaS Architecture",
        "Clean Architecture & SOLID",
      ],
      tagline: "HIGH-THROUGHPUT EVENT DRIVEN",
    },
    {
      id: "04",
      domain: "DATA & PERSISTENCE",
      title: "Data & Performance",
      skills: [
        "PostgreSQL",
        "MongoDB & Mongoose",
        "SQL Server (MSSQL)",
        "Redis Caching & Mutex",
        "Prisma ORM",
        "Asynchronous Job Processing",
      ],
      tagline: "ACID GUARANTEES & ZERO LOSS",
    },
    {
      id: "05",
      domain: "SECURITY & RELIABILITY",
      title: "Reliability & Security",
      skills: [
        "Retries & Fallback Recovery",
        "RBAC Authorization",
        "JWT & OAuth 2.0",
        "Data Sanitization",
        "Tenant Isolation",
        "Production Debugging",
      ],
      tagline: "ENTERPRISE FAULT ISOLATION",
    },
    {
      id: "06",
      domain: "DEVOPS & TESTING",
      title: "DevOps, Delivery & Testing",
      skills: [
        "Docker & Containerization",
        "Git, GitHub & GitLab CI/CD",
        "Vercel, Render & Railway",
        "Swagger & OpenAPI Specs",
        "Jest, Mocha & Chai",
        "DNS & SSL",
      ],
      tagline: "REPRODUCIBLE & AUDITABLE",
    },
  ] as CompetencyGroup[],

  education: {
    degree: "Bachelor of Science – Computer Science",
    institution:
      "MGM College of Computer Science & Information Technology, Kalamboli",
    graduation: "Graduated July 2021",
  },
};
