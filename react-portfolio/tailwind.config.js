/** @type {import('tailwindcss').Config} */
const withMT = require(@material-tailwind/utils/withMT);

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

