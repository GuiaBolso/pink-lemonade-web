import styled from '@emotion/styled';
import { css } from '@emotion/react';

import MuiTextField from '@material-ui/core/TextField';

import MuiInputAdornment from '@material-ui/core/InputAdornment';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type TextFieldProps = {
  theme: CustomThemeProps;
};

export const TextFiled = styled(MuiTextField)`
  font-family: ${({ theme }: TextFieldProps) =>
    theme?.type?.fontFamily?.neutral};

  .MuiInputBase-root {
    color: inherit;
    font-family: inherit;

    &.Mui-error {
      .MuiInputAdornment-root {
        color: ${({ theme }: TextFieldProps) =>
          theme?.colors?.feedback?.error?.default};
      }
    }
  }

  &.icon-start {
    & > .MuiInputLabel-filled {
      transform: translate(45px, 20px) scale(1);

      &.Mui-focused,
      &.MuiFormLabel-filled {
        transform: translate(45px, 10px) scale(0.75);
      }
    }
  }

  .MuiOutlinedInput-input {
    ${({ theme }: TextFieldProps) => css`
      color: ${theme?.colors?.neutral?.dark};
      font-size: ${theme?.type?.sizes?.xxs};
    `};

    padding: 27px 12px 10px;

    &.MuiInputBase-inputAdornedStart {
      padding-left: 0;
    }

    &.MuiInputBase-inputTypeSearch {
      &::-webkit-search-cancel-button {
        appearance: none;
      }
    }
  }

  .MuiOutlinedInput-notchedOutline > legend > span {
    display: none;
  }

  .MuiFormLabel-root {
    font-family: inherit;

    ${({ theme }: TextFieldProps) => css`
      color: ${theme?.colors?.neutral?.medium};
      font-size: ${theme?.type?.sizes?.xxs};
      &.Mui-focused,
      &.Mui-error {
        color: ${theme?.colors?.neutral?.medium};
      }
      &.Mui-disabled {
        color: ${theme?.colors?.neutral?.light};
      }
    `}
  }

  .MuiOutlinedInput-notchedOutline {
    ${({ theme }: TextFieldProps) => css`
      border-color: ${theme?.colors?.neutral?.regular};
    `}
  }

  .MuiOutlinedInput-root {
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }: TextFieldProps) =>
        theme?.colors?.brand?.tertiary?.default};
    }

    &.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }: TextFieldProps) =>
        theme?.colors?.feedback?.error?.default};
    }

    &.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }: TextFieldProps) =>
        theme?.colors?.neutral?.lightest};

      ${({ theme }: TextFieldProps) => css`
        border-color: ${theme?.colors?.neutral?.light};
      `}
    }
  }

  .MuiFormHelperText-root {
    font-family: inherit;
    margin-left: 0;

    &.Mui-error {
      color: ${({ theme }: TextFieldProps) =>
        theme?.colors?.feedback?.error?.default};
    }
  }
`;

export const PasswordAdornment = styled(MuiInputAdornment)`
  color: ${({ theme }: TextFieldProps) =>
    theme?.colors?.brand?.secondary?.default};
  cursor: pointer;
`;
