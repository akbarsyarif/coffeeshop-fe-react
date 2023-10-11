/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        plusJakartaSans: "Plus Jakarta Sans, sans-serif",
        sacramento: "Sacramento, cursive",
      },
      colors: {
        "color-1": "#FF8906",
        "color-1-hover": "#dd8500",
        "color-2": "#0b132a",
        "color-3": "#8e6447",
      },
    },
  },
  plugins: [],
};
