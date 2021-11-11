module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../dist/coverage/packages/key-design-system',
  // transformIgnorePatterns: ['/node_modules/(?!@ionic|lodash-es).+\\.js$'],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  displayName: 'key-design-system',
};
