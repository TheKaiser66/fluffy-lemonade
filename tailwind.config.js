const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.svelte", "./index.html"],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#0F172A',
            h1: {
              fontWeight: '400',
            },
            h2: {
              fontWeight: '400',
            },
            h3: {
              fontWeight: '400',
            },
            h4: {
              fontWeight: '400',
            },
          },
        },
        dark: {
          css: {
            color: '#F8FAFC',
            h1: {
              color: '#F1F5F9',
            },
            h2: {
              color: '#F1F5F9',
            },
            h3: {
              color: '#F1F5F9',
            },
            h4: {
              color: '#F1F5F9',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}