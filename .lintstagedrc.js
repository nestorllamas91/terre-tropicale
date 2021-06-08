module.exports = {
  './src/**/*.{ts,tsx}': ['eslint', () => 'tsc --noEmit'],
  '**/*.{js,json,md,scss,ts,tsx}': 'prettier --write'
};
