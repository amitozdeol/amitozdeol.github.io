module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      },
      fontFamily: {
        display: ["Holland"],
        body: ["Montserrat"]
      },
      fontSize: {
        "7xl": "5.5rem"
      }
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      grey: {
        100: "#f3f3f3",
        200: "#ebebeb",
        300: "#e4e4e4",
        400: "#d2d2d2",
        500: "#6e6e6e",
        600: "#606267",
        700: "#444444",
        800: "#272938",
        900: "#1a1c27",
        1000: "#00010a"
      },
      green: {
        400: "#a7cc2f",
        500: "#94b92f",
        600: "#709a14"
      },
      red: {
        100: "#FFF5F5",
        200: "#FED7D7",
        300: "#FEB2B2",
        400: "#FC8181",
        500: "#F56565",
        600: "#E53E3E",
        700: "#C53030",
        800: "#9B2C2C",
        900: "#742A2A"
      }
    },
    fill: theme => ({
      white: theme("colors.white"),
      green: theme("colors.green")
    })
  },
  variants: {
    fill: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    zIndex: ["responsive", "focus"]
  },
  plugins: []
};
