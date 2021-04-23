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
      fontFamily: {
        heading: ['Montserrat SemiBold', 'sans-serif'],
        body: ['Lato Regular', 'sans-serif']
      },
      colors: myColors
    }
  }
};
