/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F6F2EA',
        'bg-card': '#FFFFFF',
        'text-light': '#1A1A1A',
        'text-dim': '#4B5563',
        'accent': '#F9423A',
        'accent-alt': '#FFE36E',
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
