/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '24px',
        p: '12px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #5B247A, #1BCEDF)',
      },
      fontFamily: {
        h1: ['Alegreya Sans SC', 'sans-serif'],
        p: ['Alegreya', 'serif'],
        kanit: ['Kanit', 'sans-serif'],
        kode: ['Kode', 'mono']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}
