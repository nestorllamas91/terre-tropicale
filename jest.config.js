const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: [
    ['lcov']
  ],
  coveragePathIgnorePatterns: [
    'node_modules'
  ],
  coverageReporters: [
    ['lcov']
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json'
    },
  },
  reporters: ['default'],
  restoreMocks: true
};
