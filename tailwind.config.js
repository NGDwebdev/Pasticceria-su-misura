/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        pink: {
          50: '#fff0f6',
          100: '#ffe3ee',
          200: '#ffc8dc',
          300: '#ff9dc2',
          400: '#ff67a5',
          500: '#fc3b8c',
          600: '#e91e72',
          700: '#c50e5a',
          800: '#9e0f4c',
          900: '#7d1042',
        },
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
};