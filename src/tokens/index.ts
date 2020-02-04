import DesignSystem from 'design-system-utils';

const designTokens: any = {
  type: {
    // this should be set as a px value if you have `options.fontSizeUnit` set
    // to 'rem' or 'em' so that the lib can convert the values properly
    baseFontSize: '16px', // string,

    // used with `tokens.fs('size')` or `tokens.fontSize('size')`
    sizes: {
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '40px',
      xl: '56px',
      xxl: '80px',
      expanded: '100%',
    },

    fontFamily: {
      system:
        '"Open Sans", OpenSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
      sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, "Courier New", monospace',
    },

    lineHeight: {
      headings: 1.1,
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold', // instead of browser default, bold
    },
  },

  // Color palette
  // Each object needs to have the same shape
  // Each color object needs a `base` value to be the default
  // Have as many color objects as you like
  colors: {
    // Used with `ds.color('colorName')`
    colorPalette: {
      neutral: {
        blank: '#ffffff', // <string>, // base is the default
        lightest: '#0000000c',
      },
      text: {
        base: '#000000bf',
        blank: '#ffffff',
        lightest: '#00000026',
        lighter: '#00000059',
        light: '#00000059',
        dark: '#000000f2',
      },
      feedback: {
        error: '#d50000',
        success: '#57b45b',
        warning: '#e8b44d',
      },
      accent: {
        primary: '#f9386a',
        secondary: '#604579',
      },
      finance: {
        income: '#00bd6e',
      },
    },

    // Used with `ds.brand('colorName)`
    brand: {
      primary: '#250048',
      tertiary: {
        base: '#45d1f0',
        light: '#00d1ee',
      },
    },
  },

  // Breakpoints
  // Used with `ds.bp()`
  // Keys can be anything you like
  // Have as many breakpoints as you like
  // Values can be use any unit you like
  breakpoints: {
    key: '', // <number | string>,
  },

  // Z-index
  // Used with `ds.z()`
  zIndex: {
    key: 10, // <number>
  },

  // Spacing
  // Used with `ds.spacing()` or `ds.space()`
  spacing: {
    xxxs: '4px',
    xxs: '8px',
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
  },
};

export default new DesignSystem(designTokens);
