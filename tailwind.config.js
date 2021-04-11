const colors = require('tailwindcss/colors');

const myColors = {};
for (const property in colors) {
  myColors[property] = colors[property];
}
myColors.transparent = 'transparent';
myColors.current = 'currentColor';

module.exports = {
  purge: ['./src/**/component.tsx'],
  theme: {
    fontFamily: {
      body: ['Lato Regular', 'sans-serif'],
      heading: ['Montserrat SemiBold', 'sans-serif']
    },
    colors: myColors
  }
};
