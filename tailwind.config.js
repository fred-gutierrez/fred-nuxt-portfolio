/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/error.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        '172': '42rem',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
