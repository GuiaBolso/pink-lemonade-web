import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type CardProps = {
  variant?: string;
  theme: CustomThemeProps;
};

const variants = {
  default: ({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  outlined: ({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        border: 1px solid ${theme?.colors?.neutral?.light};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },
};

export const Card = styled.article`
  background: #fff;
  border-radius: ${pxToRem(4)};
  box-sizing: border-box;
  display: inline-block;
  flex: 1 1 ${pxToRem(235)};
  margin: ${pxToRem(12)};

  ${({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        box-shadow: 0 ${pxToRem(4)} ${pxToRem(4)} rgba(13, 13, 13, 0.14),
          0 0 ${pxToRem(2)} rgba(13, 13, 13, 0.2);
      `,
      guiaBolso: () => css`
        box-shadow: 0 0.5px ${pxToRem(1)} #d9d9d9;
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  }};

  /* stylelint-disable-next-line */
  ${props => variants[props.variant]}
`;
