define(function(require, exports, module) {
  module.exports = {
    env: require({ browser: true, es2020: true }),
    extends: require([
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ]),
    parser: require('@typescript-eslint/parser'),
    parserOptions: require({ ecmaVersion: 'latest', sourceType: 'module' }),
    plugins: reqiure(['react-refresh']),
    rules: require({
      'react-refresh/only-export-components': 'warn',
    })
  }
  
});