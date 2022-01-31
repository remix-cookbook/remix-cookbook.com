// eslint-disable-next-line no-undef
module.exports = {
  ignorePatterns: ['node_modues'],
  env: {
    'browser': true,
    'es2021': true,
    'cypress/globals': true,
  },
  extends: ['eslint-config-kentcdodds', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'tailwindcss', 'cypress'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
