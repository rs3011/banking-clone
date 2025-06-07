/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'wells-red': '#CD1409',
        'wells-red-dark': '#A81007',
        'wells-yellow': '#FFFF00',
        'wells-yellow-dark': '#E6E600',
        'wells-gray': {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        'heading': ['"Clarendon"', 'Georgia', 'serif'],
        'body': ['"Open Sans"', 'Arial', 'sans-serif'],
        serif: ['"Clarendon"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
};