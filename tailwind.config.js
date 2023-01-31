/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(@/assets/alex.svg)",
      },
      colors: {
        yelo: "#D49C0A",
        steam: "#282e39",
      },
      zIndex: {
        99: "99",
        100: "100",
      },
    },
  },
  plugins: [],
};
