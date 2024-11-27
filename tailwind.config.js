/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary: '#ea580c',
      secondary: '#ffffff',
      tertiary: '#000000',
      fourth: '#9ca3af'
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}

