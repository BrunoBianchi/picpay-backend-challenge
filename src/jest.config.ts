import type {Config} from 'jest';
const config:Config = {
    verbose:true,
    displayName:"Backend",
    preset:"ts-jest",
    testEnvironment:"node",
    roots:["<rootDir>"],
    testMatch:["**/tests/**/*.spec.ts"],
    clearMocks:true,
    setupFilesAfterEnv:["<rootDir>/jest.setup.ts"],
      transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },

};

export default config;