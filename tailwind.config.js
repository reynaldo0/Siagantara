/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px white',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent', // Pastikan warna teks utama juga transparan
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '0.5px white',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
        '.text-stroke-md': {
          '-webkit-text-stroke': '2px white',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '3px white',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
      });
    },
  ],
}
