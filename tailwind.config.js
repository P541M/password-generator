/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1E3A8A", // Deep Blue
        "light-blue": "#3B82F6", // Light Blue
        "gray-dark": "#4B5563", // Dark Gray
        "gray-light": "#D1D5DB", // Light Gray
        "success-green": "#10B981", // Success Green
      },
    },
  },
  plugins: [],
};
