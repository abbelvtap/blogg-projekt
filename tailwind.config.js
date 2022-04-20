const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
        current: 'currentColor',
        gray: colors.gray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        green: colors.lime,
        white: colors.white,
    },
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
