module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: [
    'disable',
    'cypress',
    'emotion',
    'react-hooks',
    'testing-library',
    'jest-dom',
  ],
  parser: 'babel-eslint', // Allows us to use es7 features
  env: {
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true,
  },
  rules: {
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ], // Allow param reassign for immer's draft
    'no-underscore-dangle': 'off', // Some keys returned from GraphQL may have dangling underscores
    'react/jsx-filename-extension': 'off',
    'react/no-danger': 'off', // The term dangerouslySetInnerHTML should be enough warning
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'emotion/jsx-import': 'off',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'eslint-plugin-disable': {
      paths: {
        jest: ['**/cypress/**/*.js'],
      },
    },
  },
};
