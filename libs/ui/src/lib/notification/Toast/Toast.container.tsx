import React from 'react';

// eslint-disable-next-line import/no-cycle
import Toast from './Toast';

import { ToastContainerProps } from './ToastProps';

import * as S from './Toast.style';

const ToastContainer = ({ messages }: ToastContainerProps) => {
  return (
    <S.ToastContainer>
      {messages.map(({ id, title, description, type }) => (
        <Toast key={id} message={{ id, title, description, type }} />
      ))}
    </S.ToastContainer>
  );
};

export default ToastContainer;
