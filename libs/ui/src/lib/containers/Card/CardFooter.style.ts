import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { Text } from '../../display/Text';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type CardFooterProps = {
  addendum?: boolean;
  theme: CustomThemeProps;
};

export const CardFooter = styled.footer`
  background: ${({ addendum, theme }: CardFooterProps) =>
    addendum
      ? theme?.colors?.brand?.secondary?.lightest
      : 'none'};
  border-radius: 0 0 ${pxToRem(4)} ${pxToRem(4)};
  padding: 0 ${pxToRem(16)} ${pxToRem(16)};
`;

export const CardFooterText = styled(Text)`
  color: ${({ theme }: CardFooterProps) => theme?.colors?.neutral?.dark};
  font-family: ${({ theme }: CardFooterProps) =>
    theme?.type?.fontFamily?.neutral};
  ${({ theme }: CardFooterProps) => {
    const themeName = {
      connect: () => css`
        color: ${theme?.colors?.neutral?.darkest};
      `,
      guiaBolso: () => css`
        color: ${theme?.colors?.neutral?.dark};
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  }};
  padding: ${pxToRem(16)} 0;
`;

CardFooterText.defaultProps = {
  variant: 'subtitle-medium',
  component: 'p'
}
