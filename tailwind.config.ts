import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'custom': '1000px',
      'min440': '440px',
      'desktop': '1200px',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
export default config;