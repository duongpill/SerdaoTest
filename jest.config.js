module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    "//node_modules",
  ],
  setupFilesAfterEnv: ['./setup-jest.ts'],
};