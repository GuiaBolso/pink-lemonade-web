import React from 'react';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { Button } from '../Button';
import { ButtonProps } from '../Button/Button';

type ActionProps = {
  arrowPosition?: 'leading' | 'trailing';
  wide?: boolean;
  theme?: Theme;
};

type ProxyActionProps = ActionProps & ButtonProps;

const ProxyAction = ({ arrowPosition: _, ...rest }: ProxyActionProps) => (
  <Button {...rest} />
);

export const Action = styled(ProxyAction)`
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
