// Jest Configuration
const path = require('path');

// Directories
const rootDir = path.join(__dirname, '../');
const testDir = '<rootDir>/test/specs';

module.exports = {
  rootDir,
  roots: [testDir],
  globals: {
    window: true,
  },
  setupFiles: [
    '<rootDir>/test/jest.setup.js',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  verbose: true,
  collectCoverage: true,
};
