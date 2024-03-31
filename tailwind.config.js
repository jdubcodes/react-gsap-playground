/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        grotesque: ['"Darker Grotesque"', 'sans-sarif'],
      },
      colors: {
        dark: 'rgb(25, 25, 25)',
        primary: '#fffce1',
      },
    },
  },
  plugins: [],
}
