/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F7F4ED',
        'bg-card': '#FFFFFF',
        'text-light': '#141414',
        'text-dim': '#555968',
        'accent': '#141414',
        'accent-alt': '#FFE873',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
