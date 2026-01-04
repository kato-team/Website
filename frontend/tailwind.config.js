// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F7',
        glass: 'rgba(255, 255, 255, 0.65)',
        primary: '#007AFF',
        textPrimary: '#1C1C1E',
        textSecondary: '#6E6E73',
        border: 'rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}