/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      "c-gray": "rgba(154, 154, 154, 0.60);",
      "c-blue": "#3D62E2",
      "c-lightBlue": "#55A1FA ",
      "c-red": "#E43737 ",
      "c-lightRed": "#FF4471 ",
      "c-black": "#1F1F25",
      "cm-gray": "#f3f3f3",
      "cm-black": "#101013",
      "c-accent-black": "#282830",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
