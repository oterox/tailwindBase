module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Monserrat: "Monserrat"
      },
      colors: {
        'verdePago': '#47d7ac',
      },
      backgroundImage: {
        'split-gray-white': "linear-gradient(to left, white 40%, #e5e7eb 60%);"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    outline: false,
  }
}
