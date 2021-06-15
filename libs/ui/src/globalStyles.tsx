import React from 'react';

import { withTheme, Global, css, Theme } from '@emotion/react';

const makeGlobalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@400;600&display=swap');

  body,
  html {
    color: ${theme?.colors?.neutral?.darkest};
    font-size: ${theme?.type?.baseFontSize}px;
  }
`;

const GlobalStyle = withTheme(({ theme }: { theme: Theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

export default GlobalStyle;
