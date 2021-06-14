import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import MuiCheckbox from '@material-ui/core/Checkbox';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';

type CheckboxStyledProps = {
  theme?: Theme;
  variant: 'simple' | 'stand-alone';
};

export const FormControlLabel = styled(MuiFormControlLabel)`
  ${({ theme, variant }: CheckboxStyledProps) => {
    const colors = {
      simple: theme?.colors?.neutral?.dark,
      'stand-alone': theme?.colors?.brand?.secondary?.default,
    };

    return css`
      && {
        .MuiCheckbox-root {
          color: ${colors[variant] || colors.simple};
          &.Mui-checked {
            color: ${theme?.colors?.brand?.secondary?.default};
          }
          &.Mui-disabled {
            color: ${theme?.colors?.neutral?.light};
          }

          &:hover {
            background-color: ${theme?.colors?.brand?.secondary?.lightest};
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

export const Checkbox = styled(MuiCheckbox)``;
