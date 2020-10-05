import styled from '@emotion/styled';
import { Close as MuiClose } from '@material-ui/icons';
// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';
import { Button } from '../../forms';

type InfoBannerTheme = {
  theme: CustomThemeProps;
};

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<InfoBannerTheme & ContainerProps>`
  background-color: ${({ theme }) =>
    theme?.colors?.feedback?.notification?.lightest};
  box-sizing: border-box;
  bottom: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  left: 0;
  padding: ${pxToRem(24)};
  position: fixed;
  width: 100vw;
  word-break: break-word;
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

export const BannerButton = styled(Button)`
  grid-row: 2/3;
`;
