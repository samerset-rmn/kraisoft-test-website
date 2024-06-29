module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'off',
    /* NOTE: I prefer sorted imports for better readability. Basically I use 3 groups: external modules, internal modules, styles. */
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index']
        ],
        pathGroups: [
          {
            pattern: '*.scss',
            patternOptions: { matchBase: true },
            group: 'sibling',
            position: 'after'
          }
        ],
        'newlines-between': 'always'
      }
    ]
  }
};
