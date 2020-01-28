module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    'macros',
    'styled-components',
  ],
  env: {
    production: {
      only: ['app'],
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
        'styled-components',
      ],
    },
    test: {
      plugins: [
        'require-context-hook',
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
        'styled-components',
      ],
    },
  },
};
