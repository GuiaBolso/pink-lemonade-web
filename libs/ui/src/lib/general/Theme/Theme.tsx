import React from 'react';

import { ThemeProvider, ThemeProviderProps } from '@emotion/react';

import GlobalStyle from '../../../globalStyles';

type ThemeProps = {
  children: React.ReactNode;
} & ThemeProviderProps;

const Theme = ({ children, theme }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
