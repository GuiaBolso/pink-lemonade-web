import React, { useEffect } from 'react';

// eslint-disable-next-line import/no-cycle
import { useToast } from './Toast.context';
import { CloseIcon } from './icons';
import Icon from './Toast.icon';

import * as S from './Toast.style';

import { ToastMessageProps } from './Toast.props';

const Toast = ({
  id,
  title,
  description,
  type,
  noIcon,
  autoClose,
  timeToClose,
}: ToastMessageProps) => {
  const { removeToast } = useToast();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (!autoClose) return () => {};

    const toastTime = setTimeout(() => {
      removeToast(id);
    }, timeToClose);

    return () => {
      clearTimeout(toastTime);
    };
  }, [autoClose, removeToast, id, timeToClose]);

  return (
    <S.Toast className="gb-toast__toast" key={id} {...(type && { type })}>
      {!noIcon && (
        <S.IconContainer>
          <Icon type={type} />
        </S.IconContainer>
      )}

      <S.ContentContainer>
        <S.ToastTitle component="strong" variant="heading-06">
          {title}
        </S.ToastTitle>

        {description && (
          <S.ToastContent component="p" variant="subtitle-medium">
            {description}
          </S.ToastContent>
        )}
      </S.ContentContainer>

      <S.CloseToast onClick={() => removeToast(id)}>
        <CloseIcon />
      </S.CloseToast>
    </S.Toast>
  );
};

export default Toast;
