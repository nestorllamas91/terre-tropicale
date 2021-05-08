const colors = require('tailwindcss/colors');

const myColors = {};
for (const property in colors) {
  myColors[property] = colors[property];
}
myColors.transparent = 'transparent';
myColors.current = 'currentColor';

module.exports = {
  theme: {
    screens: {
      mv: { raw: '(max-width: 640px)' },
      mh: { raw: '(min-width: 640px) and (max-width: 1024px) and (orientation: landscape)' },
      tv: { raw: '(min-width: 640px) and (max-width: 1024px) and (orientation: portrait)' },
      th: { raw: '(min-width: 1024px)' },
      xl: { raw: '(min-width: 1280px)' }
    },
    colors: myColors,
    fontFamily: {
      heading: ['Montserrat SemiBold', 'sans-serif'],
      body: ['Lato Regular', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/forms')],
  purge: ['./src/app/**/component.tsx']
};
