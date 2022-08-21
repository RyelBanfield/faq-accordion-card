/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
