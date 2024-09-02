/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Dark navy blue for text and primary elements
        secondary: "#4B5563", // Soft charcoal gray for secondary elements
        accent: "#10B981", // Subtle green for accents like buttons
        background: "#F3F4F6", // Light gray for background
        surface: "#E5E7EB", // Slightly darker gray for cards and surfaces
        muted: "#9CA3AF", // Cool gray for borders and inactive elements
        hint: "#6EE7B7", // Soft desaturated green for subtle accents
      },
    },
  },
  plugins: [],
};
