module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: [['lcov']],
  coveragePathIgnorePatterns: ['node_modules'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json'
    }
  },
  reporters: ['default'],
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: { '\\.[jt]sx?$': 'babel-jest' }
};
