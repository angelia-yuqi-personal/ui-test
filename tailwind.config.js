// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '2xs': ['.625rem', '.875rem'],
      'xs': ['.75rem', '1rem'],
      'sm': ['.875rem', '1.125rem'],
      'base': ['1rem', '1.375rem'],
      'lg': ['1.25rem', '1.75rem'],
      'xl': ['1.75rem', '2.25rem'],
    },
    extend: {
      spacing: {
        13: "3.25rem",
        30.5: "7.625rem",
        83: "20.75rem",
        95: "23.75rem",
        122: "30.5rem",
        160: "40rem",
      },
      colors: {
        "brand-blue": "#4c65e9",
        "brand-blue-80": "#7084ed",
        "brand-blue-60": "#94a3f2",
        "brand-blue-10": "#dbe0fb",
        "brand-blue-4": "#f8f9fe",
        'link': '#4c65e9',
        'error': '#e15c56',
        'success': '#44d7b6',
        'warning': '#ffca4f',
        gray: {
          80: '#333',
          60: '#666',
          40: '#999',
          20: '#ccc',
          10: '#eee'
        }
      },
      fontFamily: {
        body: [
          "Circular Std",
          "PingFang SC",
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
