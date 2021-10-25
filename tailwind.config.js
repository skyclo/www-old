const colors = require('tailwindcss/colors')

const tailwind_config = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Gilroy','ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe\\ UI"', 'Roboto', '"Helvetica\\ Neue"', 'Arial', '"Noto\\ Sans"', 'sans-serif', '"Apple\\ Color\\ Emoji"', '"Segoe\\ UI\\ Emoji"', '"Segoe\\ UI\\ Symbol"', '"Noto\\ Color\\ Emoji"'],
      'serif': ['Georgia', 'Cambria', '"Times\\ New\\ Roman"', 'Times', 'serif'],
      'mono': ['Cascadia Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation\ Mono"', '"Courier\ New"', 'monospace']
    },
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = tailwind_config
