import React from 'react';

// eslint-disable-next-line import/no-cycle
import Toast from './Toast';

import { ToastContainerProps } from './Toast.props';

import * as S from './Toast.style';

const ToastContainer = ({ messages }: ToastContainerProps) => {
  return (
    <S.ToastContainer>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </S.ToastContainer>
  );
};

export default ToastContainer;
