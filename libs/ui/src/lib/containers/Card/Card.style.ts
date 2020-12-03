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
  default: ({ theme }: CardProps) => css`
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  outlined: ({ theme }: CardProps) => css`
    border: 1px solid ${theme?.colors?.neutral?.light};
  `,
};

export const Card = styled.article`
  border-radius: ${pxToRem(4)};
  box-sizing: border-box;
  display: inline-block;
  flex: 1 1 ${pxToRem(235)};
  margin: ${pxToRem(12)};

  ${({ theme }: CardProps) => css`
    background: ${theme?.colors?.neutral?.blank};
    box-shadow: 0 0.5px 1px ${theme?.colors?.neutral?.light};
  `};

  /* stylelint-disable-next-line */
  ${props => variants[props.variant]}
`;
