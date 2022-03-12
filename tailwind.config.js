const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blightstone: '#8ac4ffff',
        blightichor: '#2b3a67ff',
        blightfume: '#f7b2b7ff',
        blightflora: '#132a13ff',
        blightfungi: '#c5efcbff',
        blightanomoly: '#432534ff',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
