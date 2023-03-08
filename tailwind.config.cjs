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
      fontSize: {
        " 5xl": "3.2em",
        " 4xl": "2.2em",
        " 3xl": "1.8em",
      },
      screens: {
        xs: "250px",
      },
    },
    plugins: [],
  },
};
