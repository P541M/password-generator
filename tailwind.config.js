/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#2563eb",
        accent: "#10b981",
        background: "#f0f4f8",
        surface: "#ffffff",
        muted: "#d1d5db",
      },
    },
  },
  plugins: [],
};
