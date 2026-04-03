/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1A1A1A',
        surface: '#222222',
        border: '#333333',
        paper: '#F0EDE6',
        orange: '#FF5C1A',
        dim: '#888888',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
