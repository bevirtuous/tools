const defaultConfig = require('@virtuous/unit-tests');

module.exports = {
  ...defaultConfig,
  collectCoverageFrom: [
    'packages/**/*.{js,jsx}',
  ],
};
