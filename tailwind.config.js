/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Add custom colors here
        'icon-light': '#6B6B6B',
        'icon-red-light': '#FF6B6B', // Light red
        'icon-orange-light': '#FFA07A', // Light orange
        'icon-yellow-light': '#FFD700', // Light yellow
        'icon-blue-light': '#ADD8E6', // Light blue
        'text-light': '#4C4C4C',
        'light-bg': '#F2F2F7',
        'app-blue': '#286EBA'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
