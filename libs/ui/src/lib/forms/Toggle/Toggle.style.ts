import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { default as MuiFormControlLabel } from '@material-ui/core/FormControlLabel';
import { CustomThemeProps } from '../../../typings/CustomThemeProps';
import { hexToRgb } from '@guiabolsobr/utils';

type ToggleStyledProps = {
  theme: CustomThemeProps;
};

export const FormControlLabel = styled(MuiFormControlLabel)`
  ${({ theme }: ToggleStyledProps) => {
    const rgbSecondaryDefault = hexToRgb(
      theme?.colors?.brand?.secondary?.default,
    );

    return css`
      && {
        .MuiSwitch-colorSecondary.Mui-checked:hover {
          background-color: rgba(
            ${rgbSecondaryDefault.r},
            ${rgbSecondaryDefault.g},
            ${rgbSecondaryDefault.b},
            0.04
          );
        }
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
