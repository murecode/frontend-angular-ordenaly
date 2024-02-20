/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "ord-yellow": '#f6d182',
        "ord-brown1":  '#975135',
        "ord-brown2": '#b78673',
        "ord-brown3": '#d7bcb1',
      }
    },
  },
  plugins: [],
}

