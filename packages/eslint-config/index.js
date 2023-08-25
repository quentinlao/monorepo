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
    'no-redeclare': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    react: {
      version: 'detect',
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
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};
