/**
 * TODO: configure eslint to enable internal import
 */
import utils from '@pink-lemonade-web/utils'; // eslint-disable-line

const { pxToRem } = utils.scales;

const baseFontSize = 16;

export type TokensGuiaBolsoProps = {
  name?: string;
  type?: {
    baseFontSize?: string | number;
    sizes?: {
      xxxl?: string;
      xxl?: string;
      xl?: string;
      lg?: string;
      md?: string;
      sm?: string;
      xs?: string;
      xxs?: string;
      xxxs?: string;
    };
    lineHeight?: {
      rule1?: string;
      rule2?: string;
      rule3?: string;
      rule4?: string;
    };
    fontFamily?: {
      brand?: string;
      neutral?: string;
    };
    fontWeight?: {
      bold?: string | number;
      semibold?: string | number;
      regular?: string | number;
    };
  };
  colors?: {
    brand?: {
      primary?: {
        lightest?: string;
        lighter?: string;
        light?: string;
        default?: string;
        dark?: string;
        darker?: string;
      };
      secondary?: {
        lightest?: string;
        lighter?: string;
        light?: string;
        default?: string;
        dark?: string;
        darker?: string;
      };
      tertiary?: {
        lightest?: string;
        lighter?: string;
        light?: string;
        default?: string;
        dark?: string;
        darker?: string;
      };
    };

    neutral?: {
      blank?: string;
      lightest?: string;
      light?: string;
      regular?: string;
      medium?: string;
      dark?: string;
      darkest?: string;
    };

    background?: {
      neutral?: {
        lightest?: string;
        blank?: string;
      };
      brand?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
      };
    };

    feedback?: {
      error?: {
        default?: string;
        lightest?: string;
      };
      success?: {
        default?: string;
        lightest?: string;
      };
      alert?: {
        default?: string;
        lightest?: string;
      };
      notification?: {
        default?: string;
        lightest?: string;
      };
    };

    font?: {
      brand?: {
        primary?: string;
        secondary?: string;
        neutral?: string;
      };
    };
  };
  breakpoints?: any;
  zIndex?: any;
  spacing?: any;
};

const tokens: TokensGuiaBolsoProps = {
  name: 'guiaBolso',

  type: {
    baseFontSize,

    sizes: {
      xxxl: pxToRem(64, baseFontSize),
      xxl: pxToRem(48, baseFontSize),
      xl: pxToRem(40, baseFontSize),
      lg: pxToRem(32, baseFontSize),
      md: pxToRem(24, baseFontSize),
      sm: pxToRem(20, baseFontSize),
      xs: pxToRem(18, baseFontSize),
      xxs: pxToRem(14, baseFontSize),
      xxxs: pxToRem(12, baseFontSize),
    },

    lineHeight: {
      rule1: 'calc(var(--fontSize) + 4px)',
      rule2: 'calc(var(--fontSize) + 8px)',
      rule3: 'calc(var(--fontSize) + 12px)',
      rule4: 'calc(var(--fontSize) + 14px)',
    },

    fontFamily: {
      brand: 'Axiforma',
      neutral: 'Open Sans',
    },

    fontWeight: {
      bold: 'bold',
      semibold: 'semibold',
      regular: 'regular',
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

    font: {
      brand: {
        primary: '#f9386a',
        secondary: '#3f1b68',
        neutral: '#404040',
      },
    },
  },

  breakpoints: {
    key: '',
  },

  zIndex: {
    key: 10,
  },

  spacing: {
    scale: [],
  },
};

export default tokens;
