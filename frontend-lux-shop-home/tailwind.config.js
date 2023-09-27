/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ff8421",
        white: "#ffffff",
        dimWhite: "#868686",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor:{
        countBgColor: "#000000",
        topBarBgColor: "#1d1d1d"
      },
      fontSize: {
        para1: '0.625rem',
        para2: '0.75rem',
        para3: '0.875rem',
        para4: '1rem',
        title1: '1.25rem',
        title2: '2.5rem',
        title3: '1.875rem',
      }
  
    },
    screens: {
      xs: "360px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};