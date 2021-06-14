import styled from '@emotion/styled';
import { css } from '@emotion/react';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

export const CardContent = styled.div`
  ${({ theme }) => css`
    color: ${theme?.colors?.neutral?.dark};
  `};

  padding: ${pxToRem(16)};
`;
