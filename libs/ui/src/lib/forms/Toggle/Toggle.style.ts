import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { default as MuiFormControlLabel } from '@material-ui/core/FormControlLabel';
import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type ToggleStyledProps = {
  theme: CustomThemeProps;
};

export const FormControlLabel = styled(MuiFormControlLabel)`
  ${({ theme }: ToggleStyledProps) => {
    return css`
      && {
        .MuiSwitch-root {
          color: ${theme?.colors?.neutral?.dark};

          .Mui-checked {
            color: ${theme?.colors?.brand?.secondary?.default};

            & + .MuiSwitch-track {
              background-color: ${theme?.colors?.brand?.secondary?.default};
            }
          }

          .Mui-disabled {
            color: ${theme?.colors?.neutral?.light};
          }
        }
      }

      .MuiTypography-root {
        font-size: inherit;
        font-family: ${theme?.type?.fontFamily?.neutral};
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;

        &.Mui-disabled {
          color: ${theme?.colors?.neutral?.light};
        }
      }
    `;
  }};
`;
