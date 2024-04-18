// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'AndaleMo': ['AndaleMo', 'Helvetica', 'Arial', 'sans-serif'],
        // You can define multiple font families here as per your requirements
      },
    },
  },
  plugins: [],
}


