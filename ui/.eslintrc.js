module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
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
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-fragments': [1, 'element'],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'react/jsx-props-no-spreading': ['error', {
      custom: "ignore",
    }],
  },
  overrides: [
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx"
      ],
      env: {
        jest: true
      }
    }
  ],
};
