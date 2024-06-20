import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Gothic', 'sans-serif'],
        serif: ['Baskerville'],
      },
      colors: {
        primary: '#061A2D',
        secondary: '#03223E',
        card: '#417CFF25',
        tertiary: '#08223A',
        variant: '#1B7175',
        highlight: '#417CFF',
        accent: "#9BC5C6",
        gray: '#AABCBA'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": "url('/boldhaven-hero.png')",
        "contact": "url('/boldhaven-contact-us.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
