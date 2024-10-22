/** @type {import('tailwindcss').Config} */


export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
 
    fontFamily: {
      display: ['UnifrakturMaguntia', 'serif']
    },

    extend: {
      colors: {
        'bg-primary2': '#000000',
        'bg-primary': '#000000',
        'bg-secondary': '#31333B',
        'bg-accent': '#3D3E42',
        'text-primary': '#00008B',
        'text-accent': '#BCBCBC',
        'text-secondary' : '#B0E0E6'

      }
    }
  },
  
  plugins: []
}
