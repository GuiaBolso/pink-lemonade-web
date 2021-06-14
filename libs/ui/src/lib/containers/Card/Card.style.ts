import React from 'react';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { pxToRem } from '@guiabolsobr/utils';

const variants = {
  default: ({ theme }: { theme: Theme }) => css`
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  outlined: ({ theme }: { theme: Theme }) => css`
    border: 1px solid ${theme?.colors?.neutral?.light};
  `,
};

type ArticleProps = React.ComponentProps<'article'> & {
  variant: 'default' | 'outlined';
};

export const Card = styled.article<ArticleProps>`
  border-radius: ${pxToRem(4)};
  box-sizing: border-box;
  display: inline-block;
  flex: 1 1 ${pxToRem(235)};
  margin: ${pxToRem(12)};

  ${({ theme }) => css`
    background: ${theme?.colors?.neutral?.blank};
    box-shadow: 0 0.5px 1px ${theme?.colors?.neutral?.light};
  `};

  /* stylelint-disable-next-line */
  ${props => variants[props.variant]}
`;
