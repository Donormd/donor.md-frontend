module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier', 'react-hooks', 'jsx-a11y'],
  rules: {
    'function-paren-newline': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ], // Пробелы до и после '=>'
    'rest-spread-spacing': ['error', 'never'],
    'global-require': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'no-shadow': 'off',
    'space-before-function-paren': 0,
    'max-len': ['error', 100, 2, { ignoreUrls: true }],
    'consistent-return': 'off',
    'no-console': 'error',
    'no-alert': 'error',
    'no-param-reassign': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-unused-expressions': [2, { allowTernary: true, allowShortCircuit: true }],
    'no-plusplus': 'off',
    'no-confusing-arrow': 'off',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        avoidExplicitReturnArrows: true,
      },
    ],
    'multiline-comment-style': ['error', 'starred-block'], // Мультистрочный коментарий в /*  */
    camelcase: 'error',
    'block-spacing': 'error', // { space }
    'new-parens': 'error',
    'new-cap': [
      'error',
      {
        newIsCap: true,
      },
    ],
    'lines-between-class-members': ['error', 'always'],
    'one-var': ['error', 'never'],
    'no-unneeded-ternary': 'error', // Упращение тернарных операторов
    'no-nested-ternary': 'error', // Откл вложенные тернарные операторы
    'newline-per-chained-call': ['error'],
    'wrap-regex': 'error',
    // For React
    'react/state-in-constructor': ['error', 'never'],
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    // PropTypes
    'react/prop-types': 'off',
    // A11y
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['invalidHref'],
      },
    ],
    // For hooks
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    // For prettier
    'prettier/prettier': ['error'],
    'prefer-arrow-callback': 'off',
    // For import
    'import/prefer-default-export': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    // Fix issue https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // Fix issue https://github.com/typescript-eslint/typescript-eslint/issues/2540
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // For Next.js
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};
