/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bilibili-gradient': 'linear-gradient(135deg, #FB7299 0%, #FF9DB5 50%, #FE2C55 100%)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}