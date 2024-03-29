import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import MuiButton from '@material-ui/core/Button';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';
import { ButtonColorProps } from '../../../typings/ButtonColorProps';

type ButtonStyledProps = {
  theme: CustomThemeProps;
  narrow: boolean | undefined;
} & ButtonColorProps;

type ProxyButtonProps = ButtonColorProps & {
  narrow?: boolean | undefined;
};

const ProxyMuiButton = ({
  customColor: _,
  narrow: __,
  ...rest
}: ProxyButtonProps) => <MuiButton {...rest} />;

export const Button = styled(ProxyMuiButton)`
  ${({ theme, customColor, narrow }: ButtonStyledProps) => {
    return css`
      &.MuiButton {
        &-root {
          border-radius: ${pxToRem(8)};
          font-size: ${pxToRem(theme?.type?.baseFontSize)};
          min-height: ${pxToRem(48)};
          padding: 0 ${pxToRem(24)};

          &:not(.MuiButton-fullWidth) {
            @media all and (min-width: 361px) {
              min-width: ${narrow ? 'auto' : '312px'};
            }
            @media all and (max-width: 360px) {
              width: ${narrow ? 'auto' : '100%'};
            }
          }
        }

        &-contained {
          background-color: ${customColor?.base ||
          customColor?.base ||
          theme?.colors?.brand.secondary.default};
          color: #fff;

          &:hover {
            background-color: ${customColor?.hover ||
            theme?.colors?.brand.secondary.light};
          }

          &:active {
            background-color: ${customColor?.active ||
            theme?.colors?.brand.secondary.dark};
          }

          &.Mui-disabled {
            background-color: ${theme?.colors?.neutral?.light};
            color: ${theme?.colors?.neutral.blank};
          }
        }

        &-outlined,
        &-text {
          color: ${customColor?.base || theme?.colors?.brand.secondary.default};

          &:hover {
            background-color: transparent;
            color: ${customColor?.hover ||
            theme?.colors?.brand.secondary.light};
          }

          &:active {
            color: ${customColor?.active ||
            theme?.colors?.brand.secondary.dark};
          }

          .MuiButton-label {
            font-weight: bold;
          }
        }

        &-outlined {
          border-color: ${customColor?.base ||
          theme?.colors?.brand.secondary.default};

          &:hover {
            border-color: ${customColor?.hover ||
            theme?.colors?.brand.secondary.light};
            border-width: 2px;
          }

          &:active {
            border-color: ${customColor?.active ||
            theme?.colors?.brand.secondary.dark};
          }
        }

        &-sizeSmall {
          min-height: ${pxToRem(40)};
        }
      }

      .MuiButton-label {
        font-family: ${theme?.type?.fontFamily?.neutral};
        font-weight: 600;
        text-transform: none;
      }
    `;
  }};
`;
