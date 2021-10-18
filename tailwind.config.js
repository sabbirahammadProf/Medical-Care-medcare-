module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        '900': '#011f4b',
        '700': '#03396c',
        '500': '#005b96',
        '100': '#b3cde0'
      },
      secondary: '#6497b1',
      white: '#ffffff',
      dark: '#000000',
      secondarydark: 'rgba(3, 3, 3, 0.700)',
      blue: 'blue'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
