/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Include the HTML file
    './index.html',
    // Include all JS, JSX, TS, and TSX files in the src folder
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add Arial (principal) and Inter (secondary) to the sans-serif stack
        sans: ['Arial', 'Inter', 'sans-serif'],
        // Define 'font-inter'
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};