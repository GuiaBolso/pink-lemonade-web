import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { Button } from '../Button';

type ActionProps = {
  arrowPosition?: 'leading' | 'trailing';
  wide?: boolean;
  theme?: Theme;
};

export const Action = styled(Button)`
  && {
    display: flex;
    min-height: auto;
    ${({ wide }: ActionProps) =>
      wide &&
      css`
        justify-content: 'space-between';
      `}
    padding: 0;

    .MuiButton-iconSizeMedium {
      svg path {
        fill: ${({ theme }: ActionProps) =>
          theme?.colors?.brand?.secondary?.default};
      }
    }
  }
`;

Action.defaultProps = {
  appearance: 'tertiary',
};
