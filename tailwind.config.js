/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#A53DFF',
        'secendary': '#EDD8FF80',
        'Text-color': '#556070',
        'foot1-color': '#132238',
        'footer': '#2B384C',
        'working': '#F0F1F3',
        'white-light': '#F0F1F3',
      },
      fontFamily: {
        'work-sans': 'Work Sans'
      },
      width: {
        'primary-w': '58px',
        '90%': '90%',
        '95%': '95%',
        'hero-i-w': '536px',
        'wor-primary': '312px',
        'width-secendary': '32%',
        'cont-w': '1320px'
      },
      height: {
        'primary-h': '58px',
        'hero-i-h': '636px',
        'wor-primary': '988px',
        'wor-secendry': '276px',
        'project': '472px',
        'blog': '350px',
        'cont-h': '720px',
        'foot-h': '330px'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '40px',
        md: '50px',
      }
    }  
  },
  plugins: [],
}