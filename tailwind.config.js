module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Element Colors
        'bg': {
          'dark': '#141416',
          'light': '#FCFCFD',
        },
        // Colors
        'red': '#FF4800',
        'purple': '#A24EDE',
        'pink': '#FF2D6D',
        'lpink': '#D2B2DE',
        'green': '#00B663',
        'blue': '#276FFF',
        'tan': '#E7D7CE',
        'gold': '#FFD04E',
        'gray': {
          '100': '#FCFCFD',
          '200': '#F4F5F6',
          '300': '#E6E8EC',
          '400': '#B0B5C4',
          '500': '#767E92',
          '600': '#343946',
          '700': '#222630',
          '800': '#141416',
        }
      },
      fontFamily: {
        primary: ['SF Pro Display', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '6.5xl': '4rem',
        '4.5xl': '2.5rem',
        '3.5xl': '2rem'
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}