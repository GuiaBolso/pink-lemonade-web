import React from 'react';

import { ThemeProvider } from 'emotion-theming';

// import { guiaBolso, connect } from '../../../designSystem/tokens';
import GlobalStyle from '../../../globalStyles';
import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type ThemeProps = {
  children: React.ReactNode;
  theme: CustomThemeProps;
};

const Theme = ({ children, theme }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
