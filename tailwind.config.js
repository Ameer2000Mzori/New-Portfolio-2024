/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Thambi 2"', "cursive"],
      },
      colors: {
        cardsBgColors: "#141414",
        footerBgColor: "#1C1917",
        darkBgColor: "#242424",
        upperTitleColor: "#B3B3B3",
        textColors: "#FFFFFF",
        buttonsBgColor: "#FF1D48",
      },
    },
  },
  plugins: [],
};
