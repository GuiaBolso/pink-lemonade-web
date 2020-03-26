import styled from '@emotion/styled';
import { css } from '@emotion/core';

import MuiTextField from '@material-ui/core/TextField';
import { customThemeProps } from '../../general/Theme';

type TextFieldProps = {
  theme: customThemeProps;
};

export const TextFiled = styled(MuiTextField)`
  font-family: ${({ theme }: TextFieldProps) =>
    theme?.type?.fontFamily?.neutral};

  .MuiInputBase-root {
    font-family: inherit;

    &.Mui-error {
      .MuiInputAdornment-root {
        color: ${({ theme }: TextFieldProps) =>
          theme?.colors?.feedback?.error?.default};
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
  }

  & > .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(12px, 10px) scale(0.75);
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
`;
