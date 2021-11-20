module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './static_data/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'blue': "#189EFE"
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%' : {
            opacity: 1,
          }
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
