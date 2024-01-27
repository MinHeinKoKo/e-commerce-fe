module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary : "#1565D8",
        stroke: "#0e172c",
        dark: {
          light : "#5A7184",
          hard: "#0D2436",
          soft: "#183B56",
        },
        main_bg: "#FAFBFB",
        main_dark_bg: "#20232A",
        secondary_dark_bg: "#33373E",
      },
      fontFamily: {
        Opensans : ['Open Sans', "sans-serif"],
        montserrat : ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [],
};