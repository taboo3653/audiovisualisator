module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    serviceworker: true,
  },
  extends: ['airbnb', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.6.3',
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-indent': [0],
    'no-underscore-dangle': 0,
    'max-len': [
      'off',
      {
        code: 80,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/display-name': [0],
    'no-unused-vars': 0,
    'no-console': 0,
    indent: [0],
    'linebreak-style': ['off', 'eol-last'],
    quotes: [0],
    semi: [0],
  },
};
