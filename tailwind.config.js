/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#141e21',
        'accent': '#d4961c',
        'warm-bg': '#faf8f5',
        'warm-cream': '#f0ebe2',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
