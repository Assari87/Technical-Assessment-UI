// Jest configuration file, see link for more information
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
};