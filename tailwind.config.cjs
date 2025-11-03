/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F1E6D6',
        'bg-card': '#FFFFFF',
        'text-light': '#050505',
        'text-dim': '#3F3F3F',
        'accent': '#050505',
        'accent-alt': '#F9E66B',
        'accent-soft': '#F5EDDD',
      },
      fontFamily: {
        heading: ['"Epilogue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
