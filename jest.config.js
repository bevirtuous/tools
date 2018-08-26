const defaultConfig = require('@virtuous/unit-tests');

module.exports = Object.assign({}, defaultConfig, {
  collectCoverageFrom: [
    'packages/**/*.{js,jsx}',
  ],
});
