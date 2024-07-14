/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'colorDefault': '#1f74ec',
        'borderDefault': '#E0E4EA',
        'smallIconColor': '#23272C',
        "textColor": '#23272C',
        "textLightColor": '#8b8c91',
      },
      spacing: {
        "indent-4": "4rem",
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

