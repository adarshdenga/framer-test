/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      lightblue: "#78e3eb",
      white: "#ffffff",
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      barlow: ['Barlow', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

