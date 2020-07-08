import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';
import { ToastTypeProps } from './ToastProps';

type ToastType = {
  type: ToastTypeProps;
  theme: CustomThemeProps;
};

const toastTypes = {
  INFO: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.notification?.default};
    color: #fff;
  `,
  SUCCESS: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.success?.default};
    color: #fff;
  `,
  WARNING: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.alert?.default};
    color: #404040;
  `,
  ERROR: ({ theme }: ToastType) => css`
    background-color: ${theme?.colors?.feedback?.error?.default};
    color: #fff;
  `,
};

export const ToastContainer = styled.div`
  border: 1px solid #0dd;
  padding: 15px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Toast = styled.div`
  border-radius: 4px;
  box-shadow: 0px 4px 4px #f2f2f2;
  display: flex;
  max-width: 320px;
  padding: 16px 40px 16px 50px;
  position: relative;
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ type }: ToastType) => (type && toastTypes[type]) || toastTypes.INFO}

  & + div {
    margin-top: 10px;
  }

  & > .toast-icon {
    display: block;
    margin: 0 10px 0 -34px;
  }

  div {
    flex: 1;
  }
`;

export const ToastTitle = styled.strong`
  display: block;
  font-size: 15px;
  line-height: 120%;
  margin-right: 15px;
`;

export const ToastContent = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin-top: 5px;
`;

export const CloseToast = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  position: absolute;
  right: 16px;
  top: 16px;
`;
