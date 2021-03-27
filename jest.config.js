module.exports = {
  name: 'unit',
  displayName: 'DSA Unit Tests',

  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],

  roots: ['<rootDir>'],

  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],

  bail: true,
  verbose: true,
};
