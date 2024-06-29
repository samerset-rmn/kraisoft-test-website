module.exports = {
  extends: 'next/core-web-vitals',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
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
    }
  ]
};
