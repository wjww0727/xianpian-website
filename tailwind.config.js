/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2a46a1",
          "blue-dark": "#1f3277",
          "blue-deep": "#15204a",
          red: "#ab1818",
          "red-dark": "#8a1212",
          gold: "#ffffff",
          "gold-dark": "#d9b800",
          ink: "#1f2430",
          gray: "#6b7280",
        },
      },
      fontFamily: {
        sans: [
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Noto Sans SC"',
          '"Source Han Sans SC"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(21, 32, 74, 0.15)",
        "card-hover": "0 18px 50px -12px rgba(21, 32, 74, 0.28)",
      },
    },
  },
  plugins: [],
};
