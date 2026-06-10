/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B2B40', // Deep blue
        primaryLight: '#4169E1', // Royal blue
        accent: '#FFD700', // Gold
        surface: '#FFFFFF', // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}