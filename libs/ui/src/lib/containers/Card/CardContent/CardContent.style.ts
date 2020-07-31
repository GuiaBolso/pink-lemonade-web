import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../../typings/CustomThemeProps';

type CardContentProps = {
  theme: CustomThemeProps;
};

export const CardContent = styled.div`
  ${({ theme }: CardContentProps) => {
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

  padding: ${pxToRem(16)};
`;
