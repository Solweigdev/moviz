module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('daisyui'),

    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ],
}
