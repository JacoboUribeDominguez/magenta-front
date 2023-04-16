/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**//*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#ECECEC',
          600: '#CACACA'
        },
        primary: {
          500: '#f301fe',
          800: '#c41afd',
          900: '#971EBF'
        },
        secondary: {
          500: '#94dcf6',
          600: '#7ABFD8'
        },
        black: {
          500: '#222222'
        }
      }
    },
  },
  plugins: [],
}
