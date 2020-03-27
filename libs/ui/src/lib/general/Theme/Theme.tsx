import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { guiaBolso, connect } from '../../../designSystem/tokens';
import GlobalStyle from '../../../globalStyles';

type ThemeProps = {
  children: React.ReactNode;
  theme?: 'guiaBolso' | 'connect';
};

const Theme = ({ children, theme = 'guiaBolso' }: ThemeProps) => {
  const themeName: object = {
    connect,
    guiaBolso,
  };

  const customTheme = themeName[theme];

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
