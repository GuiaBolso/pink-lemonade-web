/**
 * TODO: configure eslint to enable internal import
 */
import utils from '@pink-lemonade-web/utils'; // eslint-disable-line

import tokens from './guiaBolso';

const { pxToRem } = utils.scales;

const baseFontSize = 16;

export default {
  ...tokens,

  type: {
    ...tokens.type,

    baseFontSize,

    sizes: {
      fontSize12: pxToRem(12, baseFontSize),
      fontSize14: pxToRem(14, baseFontSize),
      fontSize16: pxToRem(16, baseFontSize),
      fontSize18: pxToRem(18, baseFontSize),
      fontSize20: pxToRem(20, baseFontSize),
      fontSize24: pxToRem(24, baseFontSize),
      fontSize32: pxToRem(32, baseFontSize),
      fontSize36: pxToRem(36, baseFontSize),
      fontSize42: pxToRem(42, baseFontSize),
      fontSize48: pxToRem(48, baseFontSize),
      fontSize52: pxToRem(52, baseFontSize),
      fontSize64: pxToRem(64, baseFontSize),
      fontSize68: pxToRem(68, baseFontSize),
      fontSize80: pxToRem(80, baseFontSize),
    },

    fontWeight: {
      bold: 700,
      semibold: 600,
      regular: 400,
      light: 300,
    },
  },

  colors: {
    ...tokens.colors,

    brand: {
      ...tokens.colors.brand,

      secondary: {
        lightest: '#f2fcfe',
        lighter: '#59d7f2',
        light: '#26caee',
        default: '#00c1eb',
        dark: '#02a6ca',
        darker: '#05829d',
      },
    },

    neutral: {
      blank: '#ffffff',
      lightest: '#f9f9fa',
      lighter: '#f3f4f4',
      light: '#eeeeef',
      brand: '#e2e3e4',
      dark: '#888889',
      darker: '#5a5b5b',
      darkest: '#2d2d2e',
    },

    font: {
      brand: {
        primary: '#250048',
        secondary: '#00c1eb',
        neutral: '#5a5b5b',
      },
    },
  },
};
