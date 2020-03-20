import React from 'react';

import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const makeGlobalStyles = theme => css`
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
