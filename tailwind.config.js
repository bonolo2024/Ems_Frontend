/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'errorImage':"url(../public/404error.png)"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

