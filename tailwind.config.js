/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "node_modules/tailvue/dist/tailvue.es.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    minWidth: {
      aside: "260px",
      "aside-sm": "84px",
    },
    maxWidth: {
      aside: "260px",
      "aside-sm": "84px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #0ea5ea, #0bd1d1, 51%, #0ea5ea)",
      },
      boxShadow: {
        ms: "0 2px 6px rgba(47, 43, 61, 0.14), 0 0 transparent, 0 0 transparent",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
