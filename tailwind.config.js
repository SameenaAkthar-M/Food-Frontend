/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'], // Adding Lato as the default sans font
      },
      screens: {
        'max-900': { 'max': '900px' }, // Custom breakpoint for max-width: 900px
      },
    },
  },
  plugins: [],
}