import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

import { Text } from '../../display/Text';

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
  border-radius: 4px;
  box-sizing: border-box;
  flex: 1 1 ${pxToRem(235)};
  margin: ${pxToRem(12)};

  ${({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        box-shadow: 0 4px 4px rgba(13, 13, 13, 0.14),
          0 0 2px rgba(13, 13, 13, 0.2);
      `,
      guiaBolso: () => css`
        box-shadow: 0px 0.5px 1px #d9d9d9;
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  }};

  /* stylelint-disable-next-line */
  ${props => variants[props.variant]}
`;
