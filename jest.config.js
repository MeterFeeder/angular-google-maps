const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
module.exports = {
  preset: 'jest-preset-angular',
  // https://github.com/thymikee/jest-preset-angular/issues/167#issuecomment-459686655
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  // moduleNameMapper: {
  //   "^@agm/core": "<rootDir>/dist/core/lib",
  // },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
};
