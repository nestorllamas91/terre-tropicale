module.exports = {
  './src/**/*.{ts,tsx}': ['eslint', 'tsc --noEmit'],
  '**/*.{ts,tsx,css,js,json,md}': 'prettier --write'
};
