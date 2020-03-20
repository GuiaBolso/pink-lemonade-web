import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { guiaBolso, connect } from '../../../designSystem/tokens';
import GlobalStyle from '../../../globalStyles';

type ThemeProps = {
  children: React.ReactNode;
  theme: 'guiaBolso' | 'connect';
};

const Theme = ({ children, theme = 'guiaBolso' }: ThemeProps) => {
  let tokens: object;

  switch (theme) {
    case 'guiaBolso':
      tokens = guiaBolso;
      break;

    case 'connect':
      tokens = connect;
      break;

    default:
      break;
  }
  console.log('theme theme', theme);
  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
