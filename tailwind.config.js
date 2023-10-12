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
      out: "A866FD",
      bg1: "rgba(212, 52, 254, 0.12)",
      bg2: "rgba(144, 58, 255, 0.12)",
      bg3: "rgba(255, 255, 255, 0.03)",
      bg4: "rgba(255, 255, 255, 0.01)",
      gradient: ["#903AFF", " #D434FE", "#FF26B9", "#FE34B9"],
    },
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans"],
        montserrat: ["Montserrat", "sans"],
        unica: ["Unica One", "cursive"],
        made: ["made-tommy-outline-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
