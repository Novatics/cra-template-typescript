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
    'react/jsx-filename-extension': [WARNING, { extensions: ['.ts', '.tsx', '.d.ts'] }], //should add ".ts" if typescript project
    'react/react-in-jsx-scope': OFF,
    'space-infix-ops': ERROR,
    'prefer-spread': ERROR,
    'no-multi-spaces': ERROR,
    'class-methods-use-this': WARNING,
    'arrow-parens': [ERROR, 'as-needed'],
    'import/prefer-default-export': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-member-accessibility': OFF,
    '@typescript-eslint/no-namespace': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'import/no-unresolved': 'error',
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
    complexity: ['error', 3]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // use <root>/path/to/folder/tsconfig.json
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
