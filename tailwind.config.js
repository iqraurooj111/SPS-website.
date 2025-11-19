module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22163b',
          light: '#3b2a59',
          accent: '#00bcd4',
          orange: '#ff9f1c',
          navy: '#0b1b3d'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}