module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "550px" }, xl: { max: "1280px"} },
    screens: { md: { max: "1050px" }, sm: { max: "550px" }, },
    extend: {
      colors: {
        gray: {
          50: "#fbfcfd",
          100: "#f2f4f7",
          300: "#e1e4e6",
          400: "#babec3",
          "50_01": "#f3f9ff",
        },
        blue_gray: {
          100: "#d1d6da",
          200: "#b6bdc4",
          300: "#9fa9b3",
          500: "#727d87",
          600: "#626e79",
          700: "#4b5665",
          800: "#2c384a",
          900: "#212731",
          "600_01": "#5c6874",
        },
        light_blue: { 900: "#074786", "900_01": "#0855a1" },
        amber: { 500: "#ffb80f" },
        blue: { 50: "#ebf5ff", 500: "#1b88f4" },
        red: { 50: "#fff4ed", 400: "#ef4c5d" },
        yellow: { 900: "#ff7724" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
