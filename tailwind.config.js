/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      height: {
        'screen-vh': 'calc(var(--vh) * 100)' // Custom height using --vh
      }
    }
  },
  plugins: []
}
