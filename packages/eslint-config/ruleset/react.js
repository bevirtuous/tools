module.exports = {
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/sort-prop-types': [2, {
      callbacksLast: false,
      ignoreCase: true,
      requiredFirst: true,
    }],
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 2,
  },
};
