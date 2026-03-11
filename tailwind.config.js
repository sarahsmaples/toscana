/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#141e21',
        'accent': '#ccbc89',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
