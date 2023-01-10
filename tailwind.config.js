/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Source Code Pro'],
        'display': ['Libre Baskerville']
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
