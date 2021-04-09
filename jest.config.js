module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@/config/(.*)': '<rootDir>/src/config/$1',
    '@/app/accueil/(.*)': '<rootDir>/src/app/accueil/$1',
    '@/app/nos-smoothies/(.*)': '<rootDir>/src/app/nos-smoothies/$1',
    '@/app/nos-cocktails/(.*)': '<rootDir>/src/app/nos-cocktails/$1',
    '@/app/a-propos/(.*)': '<rootDir>/src/app/a-propos/$1',
    '@/app/contact/(.*)': '<rootDir>/src/app/contact/$1',
    '@/app/error-404/(.*)': '<rootDir>/src/app/error-404/$1',
    '@/app/error-500/(.*)': '<rootDir>/src/app/error-500/$1',
    '@/app/shared/(.*)': '<rootDir>/src/app/shared/$1'
  }
};
