import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueprint-bg": "#f8f8f5",
        "blueprint-paper": "#ffffff",
        "blueprint-ink": "#0c0d10",
        "blueprint-subtle": "#e8e8e2",
        "blueprint-muted": "#686a73",
        "blueprint-rule": "#d1d2cb",
        "blueprint-azure": "#0038e0",
        "blueprint-cobalt": "#0020a3",
        "blueprint-cyan": "#0091ff",
        "blueprint-tint": "#f0f4ff",
        "patent-red": "#d92323",
        "patent-seal": "#0f766e",
      },
      fontFamily: {
        "serif-display": ["var(--font-instrument-serif)", "Georgia", "serif"],
        "mono-spec": ["var(--font-jetbrains-mono)", "Courier New", "monospace"],
        "swiss-sans": ["var(--font-plus-jakarta-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
