module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', '@typescript-eslint', 'react', 'jest'],
  rules: {
    'no-console': ['error', { allow: ['info'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-redeclare': 'error', // Adding the no-redeclare rule for duplicated variable declarations
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    react: {
      version: 'detect', // This will automatically detect the installed React version
    },
  },

  ignorePatterns: [
    'apps/*/node_modules/**',
    'apps/*/public/**',
    'apps/*/dist/**',
    'apps/*/build/**',
    'apps/*/*.config.js',
    'apps/*/*.config.*.js',
  ],
  parserOptions: {
    ecmaVersion: 2021, // Enable support for modern ES syntax
    sourceType: 'module', // Specify ES module syntax
  },
};
