// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        30.5: "7.625rem",
        95: "23.75rem",
        122: "30.5rem",
        160: "40rem",
      },
      colors: {
        "theme-blue": "#4c65e9",
      },
      fontFamily: {
        body: [
          "Circular Std",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
