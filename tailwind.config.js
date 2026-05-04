/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: { bg: '#0a0a0a', surface: '#111111', surface2: '#1a1a1a', border: '#27272a', text: '#f5f5f5', muted: '#a1a1aa' },
        light: { bg: '#ffffff', surface: '#f4f4f5', surface2: '#e4e4e7', border: '#d4d4d8', text: '#18181b', muted: '#52525b' },
        accent: '#7c3aed',
        highlight: { dark: '#06b6d4', light: '#0891b2' }
      }
    },
  },
  plugins: [],
}
