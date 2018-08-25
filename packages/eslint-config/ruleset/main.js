module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'capitalized-comments': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],
    'no-prototype-builtins': 1,
    'require-jsdoc': 0,
    // Reference: http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [2, {
      requireReturn: false,
      requireReturnDescription: false,
      preferType: {
        Boolean: 'boolean',
        Number: 'number',
        String: 'string',
        object: 'Object',
        array: 'Array',
      },
    }],
  },
  settings: {
    'import/extensions': ['.js', '.json', '.jsx'],
  },
};
