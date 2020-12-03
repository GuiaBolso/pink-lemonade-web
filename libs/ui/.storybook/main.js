const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rootWebpackConfig = require('../../../.storybook/webpack.config');

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  // other settings
  webpackFinal: async (config, { mode }) => {
    const tsPaths = new TsconfigPathsPlugin();

    config = await rootWebpackConfig({ config, mode });

    config.resolve.plugins
      ? config.resolve.plugins.push(tsPaths)
      : (config.resolve.plugins = [tsPaths]);
    return config;
  },
  stories: ['../src/lib/**/*.stories.@(mdx|jsx|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-docs',
    '@storybook/addon-a11y/register',
  ],
};
