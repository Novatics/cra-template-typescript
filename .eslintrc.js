const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'react/jsx-filename-extension': [
      WARNING,
      { extensions: ['.ts', '.tsx', 'js', 'jsx', '.d.ts'] }
    ], //should add ".ts" if typescript project
    'react/jsx-props-no-spreading': OFF,
    'react/react-in-jsx-scope': OFF,
    'space-infix-ops': ERROR,
    'prefer-spread': ERROR,
    'no-multi-spaces': ERROR,
    'class-methods-use-this': WARNING,
    'arrow-parens': [ERROR, 'as-needed'],
    'import/prefer-default-export': OFF,
    'consistent-return': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/no-explicit-any': WARNING,
    '@typescript-eslint/explicit-function-return-type': ERROR,
    '@typescript-eslint/explicit-member-accessibility': OFF,
    '@typescript-eslint/no-namespace': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'import/no-unresolved': 2,
    'max-lines': [
      'error',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'no-var': 'error',
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'always'],
    complexity: ['error', 5],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.jsx', '.js']
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },
  env: {
    'jest/globals': true
  }
};
