/** @type {import('tailwindcss').Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dim: "#383838",
        extra: "#272729",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
