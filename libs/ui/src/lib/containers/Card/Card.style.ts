import styled from '@emotion/styled';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

import { Text } from '../../display/Text';

type CardTheme = {
  theme: CustomThemeProps;
};

export const Card = styled.article`
  background: #fff;
  border: ${pxToRem(1)} solid
    ${({ theme }: CardTheme) => theme?.colors?.neutral?.light};
  border-radius: 6px;
  box-shadow: ${pxToRem(2)} ${pxToRem(6)} ${pxToRem(6)} rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  flex: 1 1 ${pxToRem(235)};
  margin: ${pxToRem(12)};
  padding: ${pxToRem(24)};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  &.min-height {
    min-height: ${pxToRem(45)};
  }
`;

export const Title = styled(Text)`
  color: ${({ theme }: CardTheme) => theme?.colors?.neutral?.dark};
`;

export const Spacer = styled.div`
  height: ${pxToRem(9)};
`;

export const IconContainer = styled.div`
  align-items: flex-start;
  display: flex;
  height: ${pxToRem(40)};
  justify-content: center;
  margin-left: ${pxToRem(8)};
  width: ${pxToRem(40)};
`;
