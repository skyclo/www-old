const { trueGray } = require( 'tailwindcss/colors' )
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
        gray: colors.coolGray,
        orange: colors.orange,
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
      animation: {
        logointro: "logointro 5s ease-in-out 2s forwards",
        logobackintro: "logobackintro 8s ease-in-out 0s forwards",
      },
      keyframes: {
        logointro: {
          "0%": {
            transform: "scale(100%)",
            opacity: "0%",
          },
          "5%": {
            transform: "scale(75%)",
            opacity: "100%",
          },
          "98%": {
            transform: "scale(75%)",
            opacity: "100%",
          },
          "100%": {
            transform: "scale(150%)",
            opacity: "0%",
          },
        },
        logobackintro: {
          "0%": {
            opacity: "100%",
            zIndex: "40",
          },
          "95%": {
            opacity: "100%",
            zIndex: "40",
          },
          "100%": {
            opacity: "0%",
            zIndex: "-10",
          }
        },
      },
      height: {
        '120': '480px',
      },
      margin: {
        '1/8': '12.5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

tailwind_config.theme.extend.colors.gray[950] = '#050a15'
module.exports = tailwind_config
