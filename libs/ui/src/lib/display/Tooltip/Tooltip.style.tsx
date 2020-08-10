import styled from '@emotion/styled';
import { pxToRem } from '@guiabolsobr/utils';

import MuiPopper from '@material-ui/core/Popper';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';
import { Text } from '../Text';

type TooltipProps = {
  theme: CustomThemeProps;
};

export const Popper = styled(MuiPopper)`
  .MuiTooltip {
    &-tooltipPlacementBottom {
      margin: ${pxToRem(8)} 0;
    }

    &-tooltip {
      background-color: ${({ theme }: TooltipProps) =>
        theme?.colors?.feedback?.notification?.default};
      box-shadow: 0 4px 4px ${() => 'rgb(0, 0, 0, 0.2)'};
      box-sizing: border-box;
      font-size: ${pxToRem(12)};
      line-height: ${pxToRem(20)};
      max-width: ${pxToRem(308)};
      padding: ${pxToRem(16)};
    }

    &-arrow {
      color: ${({ theme }: TooltipProps) =>
        theme?.colors?.feedback?.notification?.default};

      &:before {
        border-radius: 2px;
      }
    }
  }
`;

export const Title = styled(Text)`
  color: ${({ color }) => color};
  display: block;
  margin-bottom: ${pxToRem(4)};
`;
