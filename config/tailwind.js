module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        50: '24rem',
      },
      spacing: {
        96: '24rem',
        97: '30rem',
        98: '45rem',
        99: '42rem',
        100: '44rem',
      },
      fontFamily: {
        momo: ['Langar'],
        pataya: ['Pattaya'],
      },
      colors: {
        primary: '#FFF190',
        secondary: '#96FFC6',
      },
      minWidth: {
        '1/4': '25px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'hover'],
    },
  },
  plugins: [],
}
