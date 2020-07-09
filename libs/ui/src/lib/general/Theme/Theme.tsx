import React from 'react';

import { ThemeProvider, ThemeProviderProps } from 'emotion-theming';

import { guiaBolso, connect } from '../../../designSystem/tokens';
import GlobalStyle from '../../../globalStyles';

type ThemeProps = {
  children: React.ReactNode;
} & ThemeProviderProps<typeof guiaBolso | typeof connect>;

const Theme = ({ children, theme }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
