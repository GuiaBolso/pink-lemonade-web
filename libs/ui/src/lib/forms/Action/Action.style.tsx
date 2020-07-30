import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Button } from '../Button';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type ActionProps = {
  arrowPosition?: 'leading' | 'trailing';
  wide?: boolean;
  theme: CustomThemeProps;
};

export const Action = styled(Button)`
  && {
    display: flex;
    justify-content: ${({ wide }: ActionProps) =>
      wide ? 'space-between' : ''};
    min-height: auto;
    padding: 0;
  }
`;

Action.defaultProps = {
  appearance: 'tertiary'
};

