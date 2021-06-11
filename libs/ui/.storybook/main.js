const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rootWebpackConfig = require('../../../.storybook/webpack.config');
const path = require('path')

const toPath = _path => path.join(process.cwd(), _path)



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
    const cwd = process.cwd();

    config = await rootWebpackConfig({ config, mode });

    config.resolve.plugins
      ? config.resolve.plugins.push(tsPaths)
      : (config.resolve.plugins = [tsPaths]);

    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": path.join(cwd, "node_modules", "@emotion", "react"),
      "@emotion/styled": path.join(cwd, "node_modules", "@emotion", "styled"),
      "@emotion/styled-base": path.join(cwd, "node_modules", "@emotion", "styled"),
      "emotion-theming": path.join(cwd, "node_modules", "@emotion", "react"),
    }

    console.log(config.resolve.alias);

    return config;
  },
  stories: ['../src/lib/**/*.stories.@(mdx|jsx|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-a11y/register',
  ],
};
