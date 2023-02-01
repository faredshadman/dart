/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadetop: {
          "0%": { transform: "translateY(100px)", opacity: "50%" },
          "100%": { transform: "translateY(0)", opacity: "100%" },
        },
        fadeleft: {
          "0%": { transform: "translateX(-50px)", opacity: "60%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
      },
      animation: {
        "fade-top": "fadetop 0.9s ease-in-out",
        "fade-left": "fadeleft 0.9s ease-in-out",
      },
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
