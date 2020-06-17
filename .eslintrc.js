module.exports = {
    env: {
        es6: true,
        jest: true,
        browser: true,
    },
    extends: ['expo', 'plugin:react/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: true,
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        eqeqeq: 'off',
        'no-unused-vars': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'import/no-unresolved': [2, { caseSensitive: false }],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'import/prefer-default-export': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        camelcase: 'off',
    },
};
