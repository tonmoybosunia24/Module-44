/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"], // this forces DaisyUI to use the light theme
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

