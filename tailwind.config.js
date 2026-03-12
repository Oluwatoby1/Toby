/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      menu: "769px",
      lg: "1200px",
      'xl': '1280px',
      '2xl': '1700px', 
    },
    extend: {
      fontFamily: {
        montreal: ["NeueMontreal", "sans-serif"],
      },
      keyframes: {
        "move-lines": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 50px" },
        },
      },
      animation: {
        "move-vertical": "move-vertical 60s linear infinite",
        "60s ease-in-out infinite": "",
      },
    },
  },
  plugins: [],
};
