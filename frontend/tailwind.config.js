/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1628",
        card: "#0F1F35",
        accent: "#F59E0B"
      }
    }
  },
  plugins: []
}