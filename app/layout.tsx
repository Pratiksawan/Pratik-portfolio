import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
  title: "Pratik Sawant — AI & Full Stack Engineer",
  description:
    "Pratik Sawant is an AI and Full Stack Engineer with 4+ years of experience building intelligent products, scalable backends, and reliable enterprise systems. Explore MotoDock, client work, and the engineering behind it.",
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
  authors: [{ name: "Pratik Sawant", url: "https://github.com/Pratiksawan" }],
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#101410",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable}`}
    >
      <head>
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
      <body suppressHydrationWarning className="antialiased min-h-screen">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
