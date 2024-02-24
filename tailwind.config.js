/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/bg.jpeg')",
        
      }
    },
  },
  plugins: [],
}

