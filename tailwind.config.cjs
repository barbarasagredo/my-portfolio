/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "rose-pink": "#C3a6BA",
        "orchid-purple": "#A399B9",
        "orchid-blue": "#7DC8E6",
        "strong-pink": "#C55BBA",
      },
    },
  },
  plugins: [],
};
