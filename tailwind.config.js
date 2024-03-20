/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        vh: 'calc(100vh - 85.078px)',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        dark: 'rgb(16 24 28)',
      },
    },
  },
  plugins: [],
}
