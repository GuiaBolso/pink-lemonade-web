import React from 'react';

import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import AxiformSemiBoldWoff2 from './assets/fonts/Axiforma-SemiBold.woff2';
import AxiformSemiBoldWoff from './assets/fonts/Axiforma-SemiBold.woff';
import AxiformSemiBoldTtf from './assets/fonts/Axiforma-SemiBold.ttf';
import AxiformSemiBoldSvg from './assets/fonts/Axiforma-SemiBold.svg';

import AxiformRegularWoff2 from './assets/fonts/Axiforma-Regular.woff2';
import AxiformRegularWoff from './assets/fonts/Axiforma-Regular.woff';
import AxiformRegularTtf from './assets/fonts/Axiforma-Regular.ttf';
import AxiformRegularSvg from './assets/fonts/Axiforma-Regular.svg';

import AxiformLightWoff2 from './assets/fonts/Axiforma-Light.woff2';
import AxiformLightWoff from './assets/fonts/Axiforma-Light.woff';
import AxiformLightTtf from './assets/fonts/Axiforma-Light.ttf';
import AxiformLightSvg from './assets/fonts/Axiforma-Light.svg';

import AxiformBoldWoff2 from './assets/fonts/Axiforma-Bold.woff2';
import AxiformBoldWoff from './assets/fonts/Axiforma-Bold.woff';
import AxiformBoldTtf from './assets/fonts/Axiforma-Bold.ttf';
import AxiformBoldSvg from './assets/fonts/Axiforma-Bold.svg';

const makeGlobalStyles = theme => css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap');

  @font-face {
    font-family: 'Axiforma';
    font-style: normal;
    font-weight: 600;
    src: local('Axiforma SemiBold'), local('Axiforma-SemiBold'),
      url(${AxiformSemiBoldWoff2}) format('woff2'),
      url(${AxiformSemiBoldWoff}) format('woff'),
      url(${AxiformSemiBoldTtf}) format('truetype'),
      url(${AxiformSemiBoldSvg}#Axiforma-SemiBold) format('svg');
  }

  @font-face {
    font-family: 'Axiforma';
    font-style: normal;
    font-weight: 400;
    src: local('Axiforma Regular'), local('Axiforma-Regular'),
      url(${AxiformRegularWoff2}) format('woff2'),
      url(${AxiformRegularWoff}) format('woff'),
      url(${AxiformRegularTtf}) format('truetype'),
      url(${AxiformRegularSvg}#Axiforma-Regular) format('svg');
  }

  @font-face {
    font-family: 'Axiforma';
    font-style: normal;
    font-weight: 300;
    src: local('Axiforma Light'), local('Axiforma-Light'),
      url(${AxiformLightWoff2}) format('woff2'),
      url(${AxiformLightWoff}) format('woff'),
      url(${AxiformLightTtf}) format('truetype'),
      url(${AxiformLightSvg}#Axiforma-Light) format('svg');
  }

  @font-face {
    font-family: 'Axiforma';
    font-style: normal;
    font-weight: 700;
    src: local('Axiforma Bold'), local('Axiforma-Bold'),
      url(${AxiformBoldWoff2}) format('woff2'),
      url(${AxiformBoldWoff}) format('woff'),
      url(${AxiformBoldTtf}) format('truetype'),
      url(${AxiformBoldSvg}#Axiforma-Bold) format('svg');
  }

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
