/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        mobile : "url('/images/pattern-bg-mobile.png')",
        desktop: "url('/images/pattern-bg-desk.png')"
      }
    },
  },
  plugins: [],
}