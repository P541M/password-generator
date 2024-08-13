/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Dark gray for text and primary elements
        secondary: "#2d3748", // Medium gray for secondary elements
        accent: "#4a5568", // Lighter gray for accents
        background: "#edf2f7", // Light gray for background
        surface: "#ffffff", // White for cards and surfaces
        muted: "#a0aec0", // Muted gray for borders and inactive elements
        hintBlue: "#3182ce", // Hint of blue for subtle accents
      },
    },
  },
  plugins: [],
};
