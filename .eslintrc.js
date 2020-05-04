const globals = require('./plugins/babel/auto-import/eslint-globals')

module.exports = {
  globals: {
    MyGlobal: true,
    ...globals,
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'babel', 'react-hooks', 'import'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps'],
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'no-const-assign': 1,
    'no-this-before-super': 1,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unneeded-ternary': 2,
    'no-unused-vars': 1,
    'no-debugger': 1,
    'no-console': 0,
    'constructor-super': 1,
    'valid-typeof': 1,
    'react/display-name': 0,
    'react/jsx-uses-react': 1,
    'react/prop-types': 0,
    'react/jsx-fragments': [0, 'syntax'],
    'react-hooks/rules-of-hooks': 2,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-undef': [
      true,
      {
        allowGlobals: true,
      },
    ],
  },
}
