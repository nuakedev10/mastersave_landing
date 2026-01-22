/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ms-red': '#DC2626',
        'ms-red-light': '#EF4444',
        'ms-yellow': '#D97706',
        'ms-yellow-light': '#F59E0B',
        'ms-black': '#111827',
        'ms-white': '#FFFFFF',
        'ms-gray': '#F9FAFB',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}