/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          100: "#F1E1C6",
        },
        brown: {
          800: "#6B4F3A",
          600: "#9E7C56",
        },
      },
    },
  },
  plugins: [],
};
