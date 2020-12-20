const px = (n) => `${n / 16}rem`;
module.exports = {
  purge: ['./src/**/*.tsx', './src/*.tsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      transparent: 'transparent',
      gray: {
        light: '#f6f6f6',
        'mid-light': '#E8E8E8',
        mid: '#6B7071',
        dark: '#2C2D2A',
      },
      brand: {
        dark: '#444480',
      },
    },
    fontSize: {
      16: px(16),
      18: px(18),
      24: px(24),
      36: px(36),
      48: px(48),
      72: px(72),
    },
    fontWeight: {
      light: '300',
      regular: '400',
      semibold: '600',
      bold: '700',
      black: '900',
    },
    container: {
      center: true,
      padding: '20px',
    },
    extend: {},
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
