import React, { useEffect } from 'react';

// eslint-disable-next-line import/no-cycle
import { useToast } from './Toast.context';

import * as S from './Toast.style';

import { ToastProps } from './ToastProps';

type IconProps = {
  children: React.ReactNode;
};

const Icon = ({ children }: IconProps) => (
  <span
    className="toast-icon"
    style={{
      background: '#000',
      display: 'flex',
      fontSize: '9px',
      height: '20px',
      placeContent: 'center',
      placeItems: 'center',
      width: '20px',
      wordBreak: 'break-all',
    }}
  >
    {children}
  </span>
);

const toastIcons = {
  INFO: <Icon>INFO</Icon>,
  SUCCESS: <Icon>SUCCESS</Icon>,
  WARNING: <Icon>WARNING</Icon>,
  ERROR: <Icon>ERROR</Icon>,
};

const Toast = ({ message: { id, title, description, type } }: ToastProps) => {
  const { removeToast } = useToast();

  // useEffect(() => {
  //   const toastTime = setTimeout(() => {
  //     removeToast(id);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(toastTime);
  //   };
  // }, [removeToast, id]);

  return (
    <S.Toast key={id} {...(type && { type })}>
      {toastIcons[type || 'INFO']}

      <div>
        <S.ToastTitle>{title}</S.ToastTitle>
        {description && <S.ToastContent>{description}</S.ToastContent>}
      </div>

      <S.CloseToast onClick={() => removeToast(id)}>
        <Icon>Fechar</Icon>
      </S.CloseToast>
    </S.Toast>
  );
};

export default Toast;
