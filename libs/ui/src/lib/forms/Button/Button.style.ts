import styled from '@emotion/styled';

import MuiButton from '@material-ui/core/Button';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type ButtonProps = {
  theme: CustomThemeProps;
};

export const Button = styled(MuiButton)`
  &.MuiButton {
    &-root {
      border-radius: 8px;
      min-height: 48px;
      padding: 0 24px;

      &:not(.MuiButton-fullWidth) {
        width: 300px;
      }
    }

    &-contained {
      background-color: ${({ theme }: ButtonProps) =>
        theme?.colors?.brand.secondary.default};
      color: #fff;

      &:hover {
        background-color: ${({ theme }: ButtonProps) =>
          theme?.colors?.brand.secondary.light};
      }

      &:active {
        background-color: ${({ theme }: ButtonProps) =>
          theme?.colors?.brand.secondary.dark};
      }

      &.Mui-disabled {
        background-color: ${({ theme }: ButtonProps) =>
          theme?.colors?.neutral.brand};
        color: ${({ theme }: ButtonProps) => theme?.colors?.neutral.blank};
      }
    }

    &-outlined,
    &-text {
      color: ${({ theme }: ButtonProps) =>
        theme?.colors?.brand.secondary.default};

      &:hover {
        background-color: transparent;
        color: ${({ theme }: ButtonProps) =>
          theme?.colors?.brand.secondary.light};
      }

      &:active {
        color: ${({ theme }: ButtonProps) =>
          theme?.colors?.brand.secondary.dark};
      }

      .MuiButton-label {
        font-weight: bold;
      }
    }

    &-outlined {
      border-color: ${({ theme }: ButtonProps) =>
        theme?.colors?.brand.secondary.default};

      &:hover {
        border-color: ${({ theme }: ButtonProps) =>
          theme?.colors?.brand.secondary.light};
        border-width: 2px;
      }

      &:active {
        border-color: ${({ theme }: ButtonProps) =>
          theme?.colors?.brand.secondary.dark};
      }
    }

    &-sizeSmall {
      min-height: 40px;
    }

    &-fullWidth {
      border-radius: 0;
    }
  }

  .MuiButton-label {
    font-family: ${({ theme }: ButtonProps) =>
      theme?.type?.fontFamily?.neutral};
    font-weight: 600;
    text-transform: none;
  }
`;
