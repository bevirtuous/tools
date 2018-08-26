module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)spec)\\.(js|jsx)?$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/public/',
    '/coverage/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  unmockedModulePathPatterns: [
    'node_modules/react/',
    'node_modules/enzyme/',
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
  ],
  setupFiles: [
    '@virtuous/unit-tests/config/test-setup.js',
  ],
  setupTestFrameworkScriptFile: '@virtuous/unit-tests/config/framework-setup.js',
};
