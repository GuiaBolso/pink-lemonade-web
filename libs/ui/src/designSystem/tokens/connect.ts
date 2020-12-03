import tokens, { TokensGuiaBolsoProps } from './guiaBolso';
import { DeepPartial } from '../../typings/DeepPartial';

export type TokensConnectProps = TokensGuiaBolsoProps &
  DeepPartial<typeof connectTokens>;

const baseFontSize = 16;

const connectTokens = {
  ...tokens,

  name: 'connect',

  type: {
    ...tokens.type,

    baseFontSize,
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
  },
};

export default connectTokens;
