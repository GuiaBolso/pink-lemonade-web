import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';
import { themeProps } from '@guiabolsobr/ui';

import { CustomThemeProps } from '../../../../typings/CustomThemeProps';

type HeaderProps = {
  hasOverlineText: boolean;
  theme: CustomThemeProps;
};

const iconStyle = ({ theme }: { theme: themeProps }) => css`
  align-items: center;
  color: ${theme?.colors?.brand?.secondary?.default};
  display: flex;
  justify-content: flex-end;
`;

const title = ({ theme }: { theme: themeProps }) => css`
  align-items: center;
  color: ${theme?.colors?.neutral?.dark};
  display: flex;
`;

export const Header = styled.header`
  display: grid;
  grid-gap: ${({ hasOverlineText }: HeaderProps) =>
    hasOverlineText ? pxToRem(8) : `0 ${pxToRem(8)}`};
  grid-template-columns: 1fr ${pxToRem(30)};
  margin: ${pxToRem(16)} ${pxToRem(16)} 0 ${pxToRem(16)};

  &:last-child {
    padding-bottom: ${pxToRem(16)};
  }
`;

export const Overline = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  ${title}
`;

export const OverlineIcon = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  ${iconStyle};
`;

export const Title = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  ${title}
`;

export const TitleIcon = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  ${iconStyle};
`;
