import { pxToRem } from '@guiabolsobr/utils';
import { DeepPartial } from '../../typings/DeepPartial';

const baseFontSize = 16;

export type TokensGuiaBolsoProps = DeepPartial<typeof tokens>;

const tokens = {
  name: 'guiaBolso',

  type: {
    baseFontSize,

    sizes: {
      xxxxxl: pxToRem(80, baseFontSize),
      xxxxl: pxToRem(64, baseFontSize),
      xxxl: pxToRem(48, baseFontSize),
      xxl: pxToRem(40, baseFontSize),
      xl: pxToRem(36, baseFontSize),
      lg: pxToRem(32, baseFontSize),
      md: pxToRem(24, baseFontSize),
      sm: pxToRem(20, baseFontSize),
      xs: pxToRem(18, baseFontSize),
      xxs: pxToRem(16, baseFontSize),
      xxxs: pxToRem(14, baseFontSize),
      xxxxs: pxToRem(12, baseFontSize),
      xxxxxs: pxToRem(10, baseFontSize),
    },

    lineHeight: {
      rule1: 'calc(var(--fontSize) + 4px)',
      rule2: 'calc(var(--fontSize) + 8px)',
      rule3: 'calc(var(--fontSize) + 12px)',
      rule4: 'calc(var(--fontSize) + 14px)',
    },

    fontFamily: {
      brand: 'Montserrat',
      neutral: 'Open Sans',
    },

    fontWeight: {
      bold: 700,
      semibold: 600,
      regular: 400,
      light: 300,
    },
  },

  colors: {
    brand: {
      primary: {
        lightest: '#f4f2f6',
        lighter: '#715988',
        light: '#462663',
        default: '#250048',
        dark: '#21023f',
        darker: '#1d0533',
      },
      secondary: {
        lightest: '#fff5f8',
        lighter: '#fa688e',
        light: '#f94876',
        default: '#f9386a',
        dark: '#d6325c',
        darker: '#a62949',
      },
      tertiary: {
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
      lightest: '#f2f2f2',
      light: '#d9d9d9',
      regular: '#aaaaaa',
      medium: '#737373',
      dark: '#404040',
      darkest: '#0d0d0d',
    },

    background: {
      neutral: {
        lightest: '#fafafa',
        blank: '#ffffff',
      },
      brand: {
        primary: '#250048',
        secondary: '#f9386a',
        tertiary: '#00c1eb',
      },
    },

    feedback: {
      error: {
        default: '#e20b10',
        lightest: '#fef3f3',
      },
      success: {
        default: '#19bd54',
        lightest: '#f3fcf6',
      },
      alert: {
        default: '#fec01a',
        lightest: '#fffcf4',
      },
      notification: {
        default: '#005eeb',
        lightest: '#f2f7fe',
      },
    },
  },
};

export default tokens;
