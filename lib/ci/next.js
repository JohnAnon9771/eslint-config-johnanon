module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint-config-johnanon/lib/ci/web'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    'import-helpers/order-imports': [
      1,
      {
        newlinesBetween: 'always',
        groups: [
          ['/^next/'],
          ['/^react/'],
          'module',
          ['/components/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
