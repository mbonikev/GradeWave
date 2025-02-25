/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        "main-color": "#3277f0",
        "main-color-dark": "#0f50c0",
        "text-color": "#111111",
        "text-color-weak": "#5d5d5d",
        "card-weak": "#f5f6f8",
        "": "",
        "": "",
      },
      animation: {
        spinLoader: "spin .5s linear infinite",
        spinSlow: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
