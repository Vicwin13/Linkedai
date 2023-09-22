/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      first: "#150E28",
      second: "#903AFF",
      third: "#D434FE",
      white: "#FFFFFF",
      black: "#000000",
      gradient: ["#903AFF", " #D434FE", "#FF26B9", "#FE34B9"],
    },
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans"],
        montserrat: ["Montserrat", "sans"],
        unica : ["Unica One", "cursive"]
      },
    },
  },
  plugins: [],
};
