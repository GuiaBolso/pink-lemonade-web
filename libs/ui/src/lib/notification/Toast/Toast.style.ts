import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';
import { Text } from '../../display/Text';

import { ToastTypeProps } from './Toast.props';

type ToastType = {
  type: ToastTypeProps;
  theme: CustomThemeProps;
};

const toastTypes = {
  SUCCESS: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.success?.default};
    color: ${theme?.colors?.neutral?.blank};

    svg path {
      stroke: ${theme?.colors?.neutral?.blank};
    }

    button:focus {
      outline: 1px solid ${theme?.colors?.neutral?.blank};
    }
  `,
  ALERT: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.alert?.default};
    color: ${theme?.colors?.neutral?.dark};

    svg path {
      stroke: ${theme?.colors?.neutral?.dark};
    }

    button:focus {
      outline: 1px solid ${theme?.colors?.neutral?.dark};
    }
  `,
  ERROR: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.error?.default};
    color: ${theme?.colors?.neutral?.blank};

    svg path {
      stroke: ${theme?.colors?.neutral?.blank};
    }

    button:focus {
      outline: 1px solid ${theme?.colors?.neutral?.blank};
    }
  `,
  NOTIFICATION: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.notification?.default};
    color: ${theme?.colors?.neutral?.blank};

    & > svg path {
      fill: ${theme?.colors?.neutral?.blank};
    }

    button {
      &:focus {
        outline: 1px solid ${theme?.colors?.neutral?.blank};
      }

      svg path {
        stroke: ${theme?.colors?.neutral?.blank};
      }
    }
  `,
};

export const ToastContainer = styled.div`
  overflow: hidden;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;

  & > div {
    margin-bottom: 10px;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0.2;
    transform: translateX(15px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Toast = styled.div`
  align-items: stretch;
  animation: ${slideIn} 0.3s ease;
  border-radius: 4px;
  box-shadow: 0px 4px 4px
    ${({ theme }: ToastType) => theme?.colors?.neutral?.lightest};
  box-sizing: border-box;
  display: flex;
  max-width: 312px;
  padding: 16px;
  position: relative;
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ type }: ToastType) =>
    (type && toastTypes[type]) || toastTypes.NOTIFICATION}

  @media all and (max-width: 360px) {
    max-width: 100%;
  }
`;

export const IconContainer = styled.div`
  display: block;
  margin-right: 8px;
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const ToastTitle = styled(Text)`
  display: block;
  line-height: 24px;
  min-height: 24px;
`;

export const ToastContent = styled(Text)`
  margin-top: 5px;
`;

export const CloseToast = styled.button`
  align-self: flex-start;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  height: 24px;
  margin-left: 8px;
  padding: 0;
  width: 24px;

  svg {
    display: block;
  }
`;
