import styled from '@emotion/styled';
import { pxToRem } from '@guiabolsobr/utils';

import MuiPopper from '@material-ui/core/Popper';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type TooltipProps = {
  theme: CustomThemeProps;
};

export const Popper = styled(MuiPopper)`
  .MuiTooltip {
    &-tooltip {
      background-color: ${({ theme }: TooltipProps) => theme?.colors?.feedback?.notification?.default};
      box-shadow: 0 4px 4px ${({ theme }: TooltipProps) => theme?.colors?.neutral?.lightest};
      box-sizing: border-box;
      font-size: ${pxToRem(12)};
      line-height: ${pxToRem(20)};
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
