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
        "main-color": "var(--main-color, #3277f0)",
        "main-color-school": "#f97316",
        "main-color-dark": "#0f50c0",
        "text-color": "#111111",
        "text-color-weak": "#5d5d5d",
        "card-bg": "#e7e7e7",
        "card-bg-weak": "#f5f6f8",
        "body-bg": "#fefefe",
        "sidebar-bg": "#f2f2ff",
      },
      animation: {
        spinLoader: "spin .5s linear infinite",
        spinSlow: "spin 3s linear infinite",
        sidebarIndicator: "indicatorSidebarLink 0.2s forwards",
      },
      keyframes: {
        indicatorSidebarLink: {
          from: { height: "0", opacity: "0" },
          to: { height: "70%" },
        },
      },
    },
  },
  plugins: [],
};
