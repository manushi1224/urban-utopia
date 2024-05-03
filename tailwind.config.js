/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: {
          100: "#E2E2D5",
          900: "#EC576B",
        },
        aqua: "#4EC5C1",
      },
    },
  },
  plugins: [],
};
