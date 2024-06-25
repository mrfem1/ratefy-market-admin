/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {    
    extend: {
      fontFamily: {
        roboto: [
          '"Roboto Mono"',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        brandLight: '#000000',
        brandMain: '#000000',
        brandBold: '#000000',
        supportLight: '#000000',
        supportMain: '#000000',
        supportBold: '#000000',
        neutralLight: '#000000',
        neutralMain: '#000000',
        neutralBold: '#000000'
      }
    }
  },
  plugins: [],
}

