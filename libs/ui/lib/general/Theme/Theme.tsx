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

  return (
    <ThemeProvider theme={themeName[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
