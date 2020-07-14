import React from 'react';
import uniqid from 'uniqid';

import { Button } from '../../forms/Button';
import { ToastProvider, useToast } from './Toast.context';
import Toast from './Toast';

export default {
  title: 'Notification/Toast',
  component: ToastProvider,
  decorators: [
    /* eslint-disable-next-line */
    (story: any) => <ToastProvider>{story()}</ToastProvider>,
  ],
};

const TXT = {
  title: 'Um título bem bacanudo',
  description:
    'Um conteúdo tão ou ainda mais bacanudo que o título do toast que é bem bacanudo',
};

const ActionButtonsToast = () => {
  const {
    toastSuccess,
    toastAlert,
    toastError,
    toastNotification,
  } = useToast();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '350px',
        justifyContent: 'space-between',
        maxWidth: '380px',
      }}
    >
      <Button appearance="primary" onClick={() => toastSuccess(TXT)}>
        SUCCESS
      </Button>

      <Button appearance="primary" onClick={() => toastAlert(TXT)}>
        ALERT
      </Button>

      <Button appearance="primary" onClick={() => toastError(TXT)}>
        ERROR
      </Button>

      <Button appearance="primary" onClick={() => toastNotification(TXT)}>
        NOTIFICATION
      </Button>

      <Button
        appearance="primary"
        onClick={() => {
          toastSuccess({
            title: 'Esse toast não vai fechar automaticamente',
            description: TXT.description,
            autoClose: false,
          });
        }}
      >
        Não fechar
      </Button>

      <Button
        appearance="primary"
        onClick={() => {
          toastNotification({
            title: 'Esse toast vai fechar depois de 10 segundos',
            description: TXT.description,
            timeToClose: 10000,
          });
        }}
      >
        Fechar depois de 10 segundos
      </Button>
    </div>
  );
};

export const ActionToast = () => <ActionButtonsToast />;

export const Success = () => <Toast id={uniqid()} type="SUCCESS" {...TXT} />;

export const Alert = () => <Toast id={uniqid()} type="ALERT" {...TXT} />;

export const Error = () => <Toast id={uniqid()} type="ERROR" {...TXT} />;

export const Notification = () => <Toast id={uniqid()} {...TXT} />;

export const NoIcon = () => (
  <Toast id={uniqid()} type="ERROR" noIcon {...TXT} />
);

export const TitleOnly = () => (
  <Toast id={uniqid()} title={TXT.title} type="SUCCESS" />
);
