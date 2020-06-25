import styled from '@emotion/styled';
// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';
import { CustomThemeProps } from '../../../typings/CustomThemeProps';

import { Text } from '../../display/Text';

type InfoPanelTheme = {
  theme: CustomThemeProps;
};

export const Container = styled.div<InfoPanelTheme>`
  align-items: flex-start;
  background-color: ${({ theme }) =>
    theme?.colors?.feedback?.notification?.lightest};
  border-radius: ${pxToRem(4)};
  box-shadow: 0 0 1px ${({ theme }) => theme?.colors?.neutral?.light};
  display: flex;
  margin: ${pxToRem(20)} 0;
  padding: ${pxToRem(16)};
  word-break: break-word;
`;

export const Image = styled.img`
  display: block;
  margin-right: ${pxToRem(8)};

  @media all and (min-width: 1024px) {
    margin-right: ${pxToRem(16)};
  }
`;

export const Content = styled(Text)<InfoPanelTheme>`
  color: ${({ theme }) => theme?.colors?.neutral?.dark};
`;
