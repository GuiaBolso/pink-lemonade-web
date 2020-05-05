import React from 'react';

import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const makeGlobalStyles = theme => css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap');

  body,
  html {
    color: ${theme?.colors?.neutral?.darkest};
    font-size: ${theme?.type?.baseFontSize}px;
  }
`;

const GlobalStyle = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

export default GlobalStyle;
