/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        jura: ['Jura', 'sans-serif'], // Tambahkan font 'Jura' ke Tailwind
      },
    },
  },
  plugins: [],
};
