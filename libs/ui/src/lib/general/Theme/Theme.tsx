import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  Theme as MuiTheme,
} from '@material-ui/core/styles';

import {
  guiaBolso,
  connect,
  TokensGuiaBolsoProps,
  TokensConnectProps,
} from '../../../designSystem/tokens';
import GlobalStyle from '../../../globalStyles';

type ThemeProps = {
  children: React.ReactNode;
  theme?: 'guiaBolso' | 'connect';
};

export type customThemeProps = MuiTheme &
  (TokensGuiaBolsoProps & TokensConnectProps);

const Theme = ({ children, theme = 'guiaBolso' }: ThemeProps) => {
  const themeName: object = {
    connect,
    guiaBolso,
  };

  const customTheme = createMuiTheme(themeName[theme]);

  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Theme;
