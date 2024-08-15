/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    screens: {
      'sm' : "640px",
      'md' :'768px',
      'lg' : '940px',
      'xl' : '1200px'
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}