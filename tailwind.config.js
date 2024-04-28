/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(135deg, #665DCD 0%, #5FA4E6 45%, #D2AB67 100%)",
        "hero-slider-1": "url('/src/assets/slider/slider-bg-1.jpg')",
        "hero-slider-2": "url('/src/assets/slider/slider-bg-2.jpg')",
        "hero-slider-3": "url('/src/assets/slider/slider-bg-3.jpg')",
        "hero-slider-4": "url('/src/assets/slider/slider-bg-4.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
