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
        'footer': '#2B384C',
        'working': '#F0F1F3',
      },
      fontFamily: {
        'work-sans': 'Work Sans'
      },
      width: {
        'primary-w': '58px',
        '90%': '90%',
        'hero-i-w': '536px',
        'wor-primary': '312px',
        'por-30%': '30%'
      },
      height: {
        'primary-h': '58px',
        'hero-i-h': '636px',
        'wor-primary': '988px',
        'wor-secendry': '276px',
        'project': '472px',
        'blog': '350px',
      }
    },
  },
  plugins: [],
}