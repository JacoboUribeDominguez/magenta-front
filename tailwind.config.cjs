/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**//*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#f301fe',
          800: '#c41afd'
        }
      }
    },
  },
  plugins: [],
}
