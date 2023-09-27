module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
      ],
      plugins: ['@typescript-eslint', 'react'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    },
    {
      files: ['.eslintrc.cjs', '!vite.config.ts'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ]

}
