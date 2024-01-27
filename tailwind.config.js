// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/utils/style.css"
    
  ],
  theme: {
    extend: {
      transform: {
        '-60': 'translateY(-60px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-clip-path': {
          'clip-path': 'polygon(0 0, 100% 0%, 100% 94%, 0 100%)',
          'overflow': 'hidden',
        },
        '.footer-clip-path': {
          'clip-path': 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)',
          'overflow': 'hidden',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

