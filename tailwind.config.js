/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bilibili-gradient': 'linear-gradient(135deg, #FB7299 0%, #FF9DB5 50%, #FE2C55 100%)',
      },
      borderRadius:{
        '4xl':'2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp') // 已内置，无需单独引入
  ],
}