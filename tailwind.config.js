/** @type {import('tailwindcss').Config} */
// const withMT = require(@material-tailwind/utils/withMT);

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};

