module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'import',
    'import-helpers',
    'react-hooks',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 2,
    'func-call-spacing': 0,
    'no-spaced-func': 0,

    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': ['error'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'implicit-arrow-linebreak': 0,

    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],

    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      1,
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/'],
          'module',
          ['/components/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: '',
      },
      node: {
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
    },
  },
};
