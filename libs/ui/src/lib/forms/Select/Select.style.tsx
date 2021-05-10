import styled from '@emotion/styled';
import { pxToRem } from '@guiabolsobr/utils';
import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type Theme = {
  theme: CustomThemeProps;
  error?: boolean;
};

export const WrapperSelect = styled.div`
  & > .MuiFormControl-root {
    font-family: inherit;
    height: ${pxToRem(64)};
    width: 100%;

    .MuiPopover-paper {
      top: 84px !important;
    }

    &.Mui-focused,
    .MuiFormLabel-root.Mui-focused {
      color: ${({ theme }: Theme) => theme?.colors?.neutral?.medium} !important;
    }

    &:focus:before {
      border-color: ${({ theme, error }: Theme) =>
        error
          ? theme?.colors?.feedback?.error?.default
          : theme?.colors?.brand?.tertiary?.default};
    }

    &:hover {
      background: none;

      &:before {
        border-color: ${({ theme, error }: Theme) =>
          error
            ? theme?.colors?.feedback?.error?.default
            : theme?.colors?.brand?.tertiary?.default};
        border-width: ${pxToRem(2)};
      }

      & .MuiSelect-icon {
        color: ${({ theme }: Theme) => theme?.colors?.brand?.tertiary?.default};
        top: calc(50% - 14px);
      }
    }

    &:before {
      animation: border 0.3s linear;
      border: 1px solid
        ${({ theme, error }: Theme) =>
          error
            ? theme?.colors?.feedback?.error?.default
            : theme?.colors?.neutral?.regular};
      border-radius: 2px;
      bottom: 0;
      content: '';
      left: 0;
      padding: 1px;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
    }

    & .MuiSelect-iconFilled {
      right: 23px;
    }

    & .MuiSvgIcon-root {
      font-size: 2rem;
    }

    & .MuiSelect-icon {
      color: ${({ theme }: Theme) => theme?.colors?.brand?.secondary?.default};
      top: calc(50% - 14px);
    }

    & .MuiSelect-select:focus {
      background: none;
    }

    & .MuiFormLabel-root.Mui-error {
      color: ${({ theme }: Theme) => theme?.colors?.neutral?.dark};
    }

    & .MuiSelect-filled.MuiSelect-filled {
      color: ${({ theme }: Theme) => theme?.colors?.neutral?.dark};
      font-size: ${pxToRem(18)};
      line-height: ${pxToRem(22)};
      padding-left: ${pxToRem(16)};
    }

    & .MuiFilledInput-root {
      background: none;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      position: relative;
    }

    & .MuiFilledInput-underline {
      &:before {
        border-bottom: 0;
      }

      &:hover:before {
        border-bottom: 0;
      }
    }

    & .MuiInputLabel-formControl {
      font-size: ${pxToRem(18)};
      left: 5px;
      line-height: ${pxToRem(22)};
      transform: translate(12px, 22px) scale(1);
    }

    & .Mui-focused:after,
    & .MuiFilledInput-underline.Mui-error:after {
      transform: scaleX(0);
    }

    & .MuiFormHelperText-root.Mui-error {
      margin-left: 0;
      margin-top: 9px;
    }

    & .MuiFormHelperText-root.Mui-error,
    & .MuiSelect-icon {
      color: ${({ theme }: Theme) => theme?.colors?.feedback?.error?.default};
    }

    .MuiInputLabel-filled.MuiInputLabel-shrink {
      transform: translate(12px, 10px) scale(0.7) !important;
    }
  }
`;
