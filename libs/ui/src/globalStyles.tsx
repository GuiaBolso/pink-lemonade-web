import React from 'react';

import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const makeGlobalStyles = theme => css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap');

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
