/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main': '#0D0D0D',
        'bg-card': '#1A1A1A',
        'text-light': '#F5F5F5',
        'text-dim': '#A6A6A6',
        'accent': '#00B8D9',
        'accent-alt': '#F4B400',
      },
      fontFamily: {
        heading: ['"Inter Tight"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
