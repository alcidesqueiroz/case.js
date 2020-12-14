module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    strict: ['error', 'global'],
    'consistent-return': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-continue': 'off',
    'no-mixed-operators': 'off',
    'no-multiple-empty-lines': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
  },
};
