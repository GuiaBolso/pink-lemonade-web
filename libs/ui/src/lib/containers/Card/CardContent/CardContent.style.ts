import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../../typings/CustomThemeProps';

type CardContentProps = {
  theme: CustomThemeProps;
};

export const CardContent = styled.div`
  ${({ theme }: CardContentProps) => css`
    color: ${theme?.colors?.neutral?.dark};
  `};

  padding: ${pxToRem(16)};
`;
