// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const custom = require('../internals/webpack/webpack.prod.babel');

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: custom.module.rules.concat([
        {
          test: /\.stories\.jsx?$/,
          loaders: [require.resolve('@storybook/source-loader')],
          enforce: 'pre',
        },
      ]),
    },
    resolve: {
      ...config.resolve,
      alias: { ...config.resolve.alias, ...custom.resolve.alias },
    },
    node: { fs: 'empty' }, // polyfill
    target: 'web', // allow webpack to access web global variables
  };
};
