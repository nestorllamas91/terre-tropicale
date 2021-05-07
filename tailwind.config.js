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
      mv: { raw: '(max-width: 639px)' },
      mh: { raw: '(min-width: 640px) and (max-width: 1023px) and (orientation: landscape)' },
      tv: { raw: '(min-width: 640px) and (max-width: 1023px) and (orientation: portrait)' },
      th: { raw: '(min-width: 1024px)' }
    },
    fontFamily: {
      heading: ['Montserrat SemiBold', 'sans-serif'],
      body: ['Lato Regular', 'sans-serif']
    },
    colors: myColors
  },
  plugins: [require('@tailwindcss/forms')],
  purge: ['./src/app/**/component.tsx']
};
