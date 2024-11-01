/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/Shape.png')",
        'background2': "url('/src/assets/chose.png')",
      }
    },
  },
  plugins: [],
}