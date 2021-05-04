module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@/app/(.*)': '<rootDir>/src/app/$1',
    '@/data/(.*)': '<rootDir>/src/data/$1'
  }
};
