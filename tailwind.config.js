/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(@/assets/alex.svg)",
      },
      colors: {
        yelo: "#D49C0A",
        steam: "#282e39",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
