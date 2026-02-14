import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        sacramento: ['var(--font-sacramento)'],
        'ibm-plex': ['var(--font-ibm-plex)'],
        judson: ['var(--font-judson)'],
      },
    },
  },
  plugins: [],
} satisfies Config;