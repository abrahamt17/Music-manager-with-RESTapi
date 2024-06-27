module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg, var(--tw-gradient-stops))',
      },
      keyframes: {
        disco: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 2s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
