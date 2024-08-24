/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        jura: ['Jura', 'sans-serif'], // Tambahkan font 'Jura' ke Tailwind
      },
      boxShadow: {
        'custom-black': '5px 5px black', // Custom shadow
      },
    },
  },
  plugins: [],
};
