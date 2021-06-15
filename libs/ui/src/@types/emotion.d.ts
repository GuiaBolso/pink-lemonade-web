import '@emotion/react';
import { TokensGuiaBolsoProps } from '../designSystem/tokens';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends TokensGuiaBolsoProps {}
}
