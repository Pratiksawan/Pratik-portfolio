# Pratik Sawant — Personal Portfolio

A Next.js portfolio presenting AI and full stack engineering work, project case studies, and interactive technical exhibits.

## What you can explore

- Selected work including MotoDock, Sampark, and the Häfele conversational platform
- A diagnostic simulator with predefined vehicle complaints and sample results
- SQL, system architecture, and engineering competency exhibits
- Resume download and contact links

**Demo scope:** The diagnostic simulator is illustrative. It uses predefined cases in `data/diagnostics.ts` and does not call a live AI service. This repository contains the portfolio, not the full source code for the applications described in its case studies.

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Getting started

Prerequisites: a Node.js version supported by Next.js 15, npm, and Git.

```bash
git clone https://github.com/Pratiksawan/Pratik-portfolio.git
cd Pratik-portfolio
npm ci
npm run dev:bare
```

Open the address printed by Next.js, usually http://localhost:3000.

`npm run dev` also starts Next.js and attempts to open your default browser after two seconds. Use `dev:bare` on headless machines or when you prefer to open the browser yourself.

## Customize the portfolio

| File | Purpose |
| --- | --- |
| `data/resume.ts` | Profile details, contacts, experience, skills and project descriptions |
| `data/diagnostics.ts` | Predefined diagnostic sample data |
| `components/MotoDockSimulator.tsx` | Sample interaction and selected-work presentation |
| `app/globals.css` | Visual styling |
| `app/layout.tsx` | Page metadata and fonts |
| `public/Pratik_Sawant_Resume.pdf` | Downloadable resume |

Edit content, start the development server, and review the affected sections in the browser.

## Production

```bash
npm run build
npm start
```

The production server requires a successful build. The site loads Google fonts through `next/font/google`; builds require access to the font provider.

## Screenshot

A verified screenshot has not been added yet. Capture the running portfolio and commit it as `docs/portfolio-preview.png`, then enable the image below.

<!-- ![Portfolio preview](docs/portfolio-preview.png) -->

## License

No LICENSE file is currently present. Choose a license before offering this code for reuse; this README does not grant an open-source license.

## Contact

[GitHub](https://github.com/Pratiksawan) · [LinkedIn](https://www.linkedin.com/in/pratik-sawant-b82782214) · [Email](mailto:pratiksawant542@gmail.com)
