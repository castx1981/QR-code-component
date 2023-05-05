/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
      },
      colors: {
        'lightGrey': 'hsl(211, 45%, 89%)',
        'grey': 'hsl(219, 15%, 55%)',
        'darkNavy': 'hsl(217, 44%, 22%)',
      },
    },
  },
  plugins: [],
}
