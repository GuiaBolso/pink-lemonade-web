import styled from '@emotion/styled';
import { css } from '@emotion/core';

import MuiTextField from '@material-ui/core/TextField';
import { customThemeProps } from '../../general/Theme';

type ThemeProps = {
  theme: customThemeProps;
};

export const TextFiled = styled(MuiTextField)`
  font-family: ${({ theme }: ThemeProps) => theme?.type?.fontFamily?.neutral};

  .MuiInputBase-root {
    font-family: inherit;
  }

  .MuiOutlinedInput-input {
    ${({ theme }: ThemeProps) => {
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

    ${({ theme }: ThemeProps) => {
      const themeName = {
        connect: () => css`
          color: ${theme?.colors?.neutral?.dark};
          &.Mui-focused {
            color: ${theme?.colors?.neutral?.dark};
          }
        `,
        guiaBolso: () => css`
          color: ${theme?.colors?.neutral?.medium};
          &.Mui-focused {
            color: ${theme?.colors?.neutral?.medium};
          }
        `,
      };
      return (themeName[theme?.name] || themeName.guiaBolso)();
    }}
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }: ThemeProps) =>
      theme?.colors.brand.tertiary.default};
  }
`;
