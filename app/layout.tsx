import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PS-2026-AI-RLS Specification Specimen — Pratik Sawant",
  description:
    "Architectural Patent Specimen of Pratik Sawant — AI / Full Stack Systems Engineer (4+ Yrs Exp) specializing in bounded LLM reasoning, Redis distributed concurrency, PostgreSQL RLS, and MotoDock Auto Workshop ERP.",
  keywords: [
    "Pratik Sawant",
    "AI Systems Engineer",
    "Full Stack Engineer",
    "LLM Guardrails",
    "Google Gemini API",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "MotoDock",
  ],
  authors: [{ name: "Pratik Sawant", url: "https://github.com/pratiksawant542" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f8f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Automatically purge stale service workers and PWA caches on localhost */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (var r of registrations) {
                      r.unregister();
                      console.log('Purged stale service worker:', r);
                    }
                  });
                }
                if ('caches' in window) {
                  caches.keys().then(function(keys) {
                    for (var k of keys) {
                      caches.delete(k);
                      console.log('Purged stale cache:', k);
                    }
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-blueprint-bg font-swiss-sans text-blueprint-ink selection:bg-blueprint-azure selection:text-white antialiased min-h-screen relative blueprint-grid"
      >
        {children}
      </body>
    </html>
  );
}
