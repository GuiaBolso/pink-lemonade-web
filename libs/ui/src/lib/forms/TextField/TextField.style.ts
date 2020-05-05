import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  TextField as MuiTextField,
  InputAdornment as MuiInputAdornment,
} from '@material-ui/core';
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
    ${({ theme }: TextFieldProps) => {
      const themeName = {
        connect: () => css`
          color: ${theme?.colors?.neutral?.darker};
          font-size: ${theme?.type?.sizes?.fontSize16};
        `,
        guiaBolso: () => css`
          color: ${theme?.colors?.neutral?.dark};
          font-size: ${theme?.type?.sizes?.xs};
        `,
      };
      return (themeName[theme?.name] || themeName.guiaBolso)();
    }};

    padding: 27px 12px 10px;

    &.MuiInputBase-inputAdornedStart {
      padding-left: 0;
    }
  }

  .MuiOutlinedInput-notchedOutline > legend > span {
    display: none;
  }

  .MuiFormLabel-root {
    font-family: inherit;

    ${({ theme }: TextFieldProps) => {
      const themeName = {
        connect: () => css`
          color: ${theme?.colors?.neutral?.dark};
          font-size: ${theme?.type?.sizes?.fontSize16};
          &.Mui-focused,
          &.Mui-error {
            color: ${theme?.colors?.neutral?.dark};
          }
          &.Mui-disabled {
            color: ${theme?.colors?.neutral?.brand};
          }
        `,
        guiaBolso: () => css`
          color: ${theme?.colors?.neutral?.medium};
          font-size: ${theme?.type?.sizes?.xs};
          &.Mui-focused,
          &.Mui-error {
            color: ${theme?.colors?.neutral?.medium};
          }
          &.Mui-disabled {
            color: ${theme?.colors?.neutral?.light};
          }
        `,
      };
      return (themeName[theme?.name] || themeName.guiaBolso)();
    }}
  }

  .MuiOutlinedInput-notchedOutline {
    ${({ theme }: TextFieldProps) => {
      const themeName = {
        connect: () => css`
          border-color: ${theme?.colors?.neutral?.brand};
        `,
        guiaBolso: () => css`
          border-color: ${theme?.colors?.neutral?.regular};
        `,
      };
      return (themeName[theme?.name] || themeName.guiaBolso)();
    }}
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

      ${({ theme }: TextFieldProps) => {
        const themeName = {
          connect: () => css`
            border-color: ${theme?.colors?.neutral?.light};
          `,
          guiaBolso: () => css`
            border-color: ${theme?.colors?.neutral?.lighter};
          `,
        };
        return (themeName[theme?.name] || themeName.guiaBolso)();
      }}
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
