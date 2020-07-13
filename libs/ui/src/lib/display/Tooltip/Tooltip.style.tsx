import styled from '@emotion/styled';
import { pxToRem } from '@guiabolsobr/utils';

import MuiPopper from '@material-ui/core/Popper';
import MuiTooltip from '@material-ui/core/Tooltip';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type TooltipProps = {
  theme: CustomThemeProps;
};

export const Tooltip = styled(MuiTooltip)`
`;

export const Popper = styled(MuiPopper)`
  .MuiTooltip {
    &-tooltip {
      background-color: ${({ theme }: TooltipProps) => theme?.colors?.feedback?.notification?.default};
      box-sizing: border-box;
      font-size: ${pxToRem(12)};
      max-width: ${pxToRem(308)};
      padding: ${pxToRem(16)};
    }

    &-arrow {
      color: ${({ theme }: TooltipProps) => theme?.colors?.feedback?.notification?.default};

      &:before {
        border-radius: 2px;
      }
    }
  }
`;
