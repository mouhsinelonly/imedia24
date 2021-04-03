// jest.config.js
import { defaults } from 'jest-config';
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', "<rootDir>/cypress/"],
  // moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    "@components/(.*)": "<rootDir>/components/$1",
    "@pages/(.*)": "<rootDir>/pages/$1",
    "@hooks/(.*)": "<rootDir>/hooks/$1",
    "@utils/(.*)": "<rootDir>/utils/$1",
  },
};