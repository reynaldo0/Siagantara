/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStroke: {
        DEFAULT: '1px white',
        sm: '0.5px white',
        md: '2px white',
        lg: '3px white',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
        },
        '.text-stroke-sm-white': {
          '-webkit-text-stroke': '0.5px white',
        },
        '.text-stroke-md-white': {
          '-webkit-text-stroke': '2px white',
        },
        '.text-stroke-lg-white': {
          '-webkit-text-stroke': '3px white',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}

