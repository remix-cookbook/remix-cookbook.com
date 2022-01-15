module.exports = {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        dark: {
          'polar-night1': '#4C566A',
          'polar-night2': '#434C5E',
          'polar-night3': '#3B4252',
          'polar-night4': '#2E3440',
          'midnight': '#212121',
        },
        light: {
          'snow-storm1': '#ECEFF4',
          'snow-storm2': '#E5E9F0',
          'snow-storm3': '#D8DEE9',
        },
        color: {
          'aurora-red': '#BF616A',
          'aurora-orange': '#D08770',
          'aurora-yellow': '#EBCB8B',
          'aurora-green': '#A3BE8C',
          'aurora-purple': '#B48EAD',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
