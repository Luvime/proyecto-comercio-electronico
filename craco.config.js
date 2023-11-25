// craco.config.js
module.exports = {
    base: '/proyecto-comercio-electronico/',
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }