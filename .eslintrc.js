const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@novatics-tools/eslint-config-react-typescript'],
  rules: {
    'no-shadow': OFF,
    'import/no-cycle': OFF,
    'react/require-default-props': OFF,
    'no-unused-vars': WARNING,
    '@typescript-eslint/no-unused-vars': WARNING,
  },
  overrides: [
    {
      files: ['src/ui/test-utils.tsx'],
      rules: {
        'import/no-extraneous-dependencies': OFF,
      },
    },
  ],
  ignorePatterns: ['mockServiceWorker.js'],
}
