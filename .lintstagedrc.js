module.exports = {
  './src/**/*.{ts,tsx}': ['eslint', () => 'tsc -p tsconfig.json --noEmit'],
  '**/*.{ts,tsx,css,js,json,md}': 'prettier --write'
};
