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
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
