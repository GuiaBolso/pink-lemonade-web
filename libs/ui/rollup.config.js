const resolve = require('rollup-plugin-node-resolve');
const commonJS = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript');

function getRollupOptions(options) {
  const globals = options.output.globals || {};
  globals.react = 'React';
  globals['react-dom'] = 'ReactDOM';
  globals['styled-components'] = 'styled';
  globals['@emotion/core'] = 'emotionCore';
  globals['@emotion/styled'] = 'emotionStyled';
  options.output.globals = globals;

  options.plugins = [
    resolve(),
    typescript({
      tsconfig: 'libs/ui/tsconfig.json',
    }),
    commonJS({
      include: 'node_modules/**',
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
      namedExports: {
        'node_modules/react-is/index.js': ['ForwardRef', 'Memo'],
        'node_modules/prop-types/index.js': ['elementType'],
      },
    }),
  ];
  return options;
}

module.exports = getRollupOptions;
