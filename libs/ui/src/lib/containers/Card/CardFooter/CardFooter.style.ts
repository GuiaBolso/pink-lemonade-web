import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { Text } from '../../../display/Text';

type CardFooterProps = {
  addendum?: boolean;
  theme?: Theme;
};

export const CardFooter = styled.footer`
  background: ${({ addendum, theme }: CardFooterProps) =>
    addendum ? theme?.colors?.brand?.secondary?.lightest : 'none'};
  border-radius: 0 0 ${pxToRem(4)} ${pxToRem(4)};
  padding: ${({ addendum }: CardFooterProps) =>
    addendum
      ? `${pxToRem(16)} ${pxToRem(16)}`
      : `0 ${pxToRem(16)} ${pxToRem(16)}`};
`;

export const CardFooterText = styled(Text)`
  color: ${({ theme }: CardFooterProps) => theme?.colors?.neutral?.dark};
  font-family: ${({ theme }: CardFooterProps) =>
    theme?.type?.fontFamily?.neutral};
  ${({ theme }: CardFooterProps) => css`
    color: ${theme?.colors?.neutral?.dark};
  `};
  padding: ${({ addendum }: CardFooterProps) =>
    addendum ? `0 0 ${pxToRem(16)} 0` : `${pxToRem(16)} 0`};
`;

CardFooterText.defaultProps = {
  variant: 'subtitle-medium',
  component: 'p',
};
