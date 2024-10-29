/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#A53DFF',
        'secendary': '#EDD8FF80',
        'Text-color': '#556070',
        'foot1-color': '#132238',
        'footer': '#2B384C'
      },
      fontFamily: {
        'work-sans': 'Work Sans'
      },
      width: {
        'primary-w': '58px',
        '90%': '90%',
        'hero-i-w': '536px'
      },
      height: {
        'primary-h': '58px',
        'hero-i-h': '636px'
      }
    },
  },
  plugins: [],
}