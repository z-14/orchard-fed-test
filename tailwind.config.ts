/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{vue,js}',
    './nuxt.config.{js,ts}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'sans': ['OpenSans', 'sans-serif'], // You can list fallback fonts here
      },
    },
  },
  plugins: [],
}