module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': ["error", { "code": 105 }],
    'no-unused-vars': "off",
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'no-bitwise': 'off',
  },
};
