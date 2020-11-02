module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint-config-johnanon/lib/defaults',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y'],
};
