import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { pxToRem } from '@guiabolsobr/utils';

import { Close as MuiClose } from '../../icons';
import { Button } from '../../forms';

type InfoBannerTheme = {
  theme?: Theme;
};

type ContainerProps = {
  isOpen: boolean;
  position: 'top' | 'bottom';
};

export const Container = styled.div<InfoBannerTheme & ContainerProps>`
  background-color: ${({ theme }) =>
    theme?.colors?.feedback?.notification?.lightest};
  box-sizing: border-box;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  left: 0;

  ${({ position }) =>
    position === 'top'
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `}

  padding: ${pxToRem(24)};
  position: fixed;
  width: 100vw;
  word-break: break-word;
  z-index: 8000;

`;

export const Content = styled.div`
  align-items: flex-start;
  column-gap: ${pxToRem(40)};
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: flex-start;
  max-width: ${pxToRem(1120)};
  row-gap: ${pxToRem(16)};
`;

export const Close = styled(MuiClose)`
  color: ${({ theme }: InfoBannerTheme) =>
    theme?.colors?.feedback?.notification?.default};
  cursor: pointer;
`;

export const ConfirmButton = styled(Button)`
  grid-row: 2/3;

  && {
    background-color: ${({ theme }: InfoBannerTheme) =>
      theme?.colors?.feedback?.notification?.default};

    :hover {
      background-color: ${({ theme }: InfoBannerTheme) =>
        theme?.colors?.feedback?.notification?.default};
    }
  }
`;
