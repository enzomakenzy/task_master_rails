const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', 'sans-serif']
      },
    },
    colors: {
      header: "#262626",
      back: "#212121",
      purple: "#6A15AF",
      hoverTask: "#313131",
      colorFont: "#BFBFBF",
      hoverPurple: "#500091",
      hoverFont: "#DFDADA",
      input: "#2F2F2F",
      placeholderColorFont: "#5A5959",
      error: "#AF1518"
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
