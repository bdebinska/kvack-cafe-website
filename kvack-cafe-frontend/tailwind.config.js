/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-baige': '#A7987D',
        'primary-text': '#E5E5E5'
      },
      fontFamily: {
        'hanuman': ['Hanuman'],
        'roboto': ['Roboto']
      }
    },
  },
  plugins: [],
}

