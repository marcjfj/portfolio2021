module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('precss'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
      ],
    },
  },
};
