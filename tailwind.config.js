/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens :{
      'md': {'max': '767px'},
      'sm': {'max': '639px'},

    },
    extend: {
      fontFamily:{
        Baloo : ['Baloo', 'cursive'],
        worksans : ['Work Sans', 'serif']
      },
      
    },
  },
  plugins: [],
}