/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F111A',
        'card-bg': '#1A1C25',
        'input-bg': '#2A2D3A',
        'accent-gold': '#FFD700',
        'accent-purple': '#800080',
        'purple-hover': '#9c27b0',
        'error': '#ff6b6b',
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'sans-serif'],
      }
    },
  },
  plugins: [],
}