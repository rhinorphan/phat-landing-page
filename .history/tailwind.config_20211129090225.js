module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'pink-lighter': '#B5427F',
      'pink': '#A6447A',
      'pink-darker': '#6D2650',
      'blue-lighter': '#193B59',
      'blue': '#1E4959',
      'blue-darker': '#193B5E','sun-lighter': '#F2C029','sun': '#D9763D',
      'sun-darker': '#BF5656',
      green: '#BF5656',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
