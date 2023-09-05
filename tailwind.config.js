/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  extend: {
    colors: {
      custom: {
        gray: {
          800: '#35373B'
        },
      },
    },
  },
  plugins: [],
}
