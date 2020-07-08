import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { ToastTypeProps } from './ToastProps';

type ToastType = {
  type: ToastTypeProps;
};

const toastTypes = {
  INFO: css`
    background-color: #005eeb;
    color: #fff;
  `,
  SUCCESS: css`
    background-color: #19bd54;
    color: #fff;
  `,
  WARNING: css`
    background-color: #fec01a;
    color: #404040;
  `,
  ERROR: css`
    background-color: #e20b10;
    color: #fff;
  `,
};

export const ToastContainer = styled.div`
  border: 1px solid #0dd;
  padding: 30px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Toast = styled.div<ToastType>`
  border-radius: 4px;
  box-shadow: 0px 4px 4px #f2f2f2;
  display: flex;
  max-width: 320px;
  padding: 16px 40px 16px 50px;
  position: relative;
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ type }) => (type && toastTypes[type]) || toastTypes.INFO}

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
