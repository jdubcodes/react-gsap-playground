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
