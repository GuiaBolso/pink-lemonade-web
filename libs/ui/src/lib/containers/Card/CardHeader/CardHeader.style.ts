import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { pxToRem } from '@guiabolsobr/utils';

type HeaderProps = {
  hasOverlineText: boolean;
  theme?: Theme;
};

const iconStyle = ({ theme }: { theme: Theme }) => css`
  align-items: center;
  color: ${theme?.colors?.brand?.secondary?.default};
  display: flex;
  justify-content: flex-end;
`;

const title = ({ theme }: { theme: Theme }) => css`
  align-items: center;
  color: ${theme?.colors?.neutral?.dark};
  display: flex;
`;

export const Header = styled.header<HeaderProps>`
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
