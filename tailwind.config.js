const colors = require('tailwindcss/colors');

const myColors = {};
for (const property in colors) {
  myColors[property] = colors[property];
}
myColors.transparent = 'transparent';
myColors.current = 'currentColor';

module.exports = {
  purge: ['./src/app/**/component.tsx'],
  theme: {
    extend: {
      screens: {
        sm: {
          raw: '(min-width: 640px) and (orientation: portrait)'
        },
        smh: {
          raw: '(min-width: 640px) and (orientation: landscape)'
        },
        lgh: {
          raw: '(min-width: 1024px) and (orientation: landscape)'
        }
      },
      colors: myColors,
      fontFamily: {
        heading: ['Montserrat SemiBold', 'sans-serif'],
        body: ['Lato Regular', 'sans-serif']
      }
    }
  }
};
