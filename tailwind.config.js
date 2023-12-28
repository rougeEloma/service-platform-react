/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        "primary-color": "rgb(var(--primary-color) / <alpha-value>)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "other-color": "var(--other-color)",
        "links-color": "var(--links-color)",
        "white-color": "var(--white-color)",
        "black-color": "var(--black-color)"
      }}
  },
  plugins: [],
}