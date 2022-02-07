const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        'roboto-slab': ['Roboto Slab'],
        montserrat: ['Montserrat'],
      },
      fontSize: {
        'semi-lg': '1.05rem',
      },
      keyframes: {
        slideFromRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 100,
          },
        },
        slideFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 100,
          },
        },
        slideFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '50%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 100,
          },
        },
      },

      animation: {
        slideFromRight: 'slideFromRight 0.7s ease-out 1',
        slideFromLeft: 'slideFromLeft 0.7s ease-out 1',
        slideFromTop: 'slideFromTop 1.4s ease-out 1',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
