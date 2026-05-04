import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        primary: "var(--accent-primary)",
        secondary: "var(--accent-secondary)",
        textMain: "var(--text-primary)",
        textMuted: "var(--text-muted)",
        border: "var(--border-color)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space-grotesk)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
