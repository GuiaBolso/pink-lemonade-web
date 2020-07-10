import React from 'react';

import Toast from './Toast';
import { ToastProvider, useToast } from './Toast.context';

import { Button } from '../../forms/Button';

export default {
  title: 'Notification/Toast',
  component: ToastProvider,
  decorators: [
    /* eslint-disable-next-line */
    (story: any) => <ToastProvider>{story()}</ToastProvider>,
  ],
};

const ActionButtonsToast = () => {
  const { addToast } = useToast();

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
      <Button
        appearance="primary"
        onClick={() => {
          addToast({
            title: 'Mensagem de SUCESSO',
            description: 'Esse é um exemplo de uma mensagem de SUCESSO',
            type: 'SUCCESS',
          });
        }}
      >
        SUCCESS
      </Button>

      <Button
        appearance="primary"
        onClick={() => {
          addToast({
            title: 'Mensagem de AVISO',
            description: 'Esse é um exemplo de uma mensagem de AVISO',
            type: 'ALERT',
          });
        }}
      >
        ALERT
      </Button>

      <Button
        appearance="primary"
        onClick={() => {
          addToast({
            title: 'Mensagem de ERRO',
            description: 'Esse é um exemplo de uma mensagem de ERRO',
            type: 'ERROR',
          });
        }}
      >
        ERROR
      </Button>

      <Button
        appearance="primary"
        onClick={() => {
          addToast({
            title: 'Mensagem de INFORMAÇÃO',
            description: 'Esse é um exemplo de uma mensagem de INFORMAÇÃO',
            type: 'NOTIFICATION',
          });
        }}
      >
        NOTIFICATION
      </Button>

      <Button
        appearance="primary"
        onClick={() => {
          addToast({
            title: 'Abrir e NÃO fechar automaticamente',
            description:
              'Esse é um exemplo de uma mensagem que vai abrir e NÃO vai fechar automaticamente',
            type: 'NOTIFICATION',
            autoClose: false,
          });
        }}
      >
        Não fechar
      </Button>

      <Button
        appearance="primary"
        onClick={() => {
          addToast({
            title: 'Fechar depois de 10 segundos',
            description:
              'Esse é um exemplo de uma mensagem que vai abrir e, fechar somende depois de 10 segundos',
            type: 'NOTIFICATION',
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

export const Notification = () => (
  <Toast
    message={{
      id: '10',
      title: 'Notification tost',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    }}
  />
);

export const Success = () => (
  <Toast
    message={{
      id: '11',
      title: 'Success toast',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'SUCCESS',
    }}
  />
);

export const Alert = () => (
  <Toast
    message={{
      id: '12',
      title: 'Alert toast',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'ALERT',
    }}
  />
);

export const Error = () => (
  <Toast
    message={{
      id: '13',
      title: 'Error toast',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'ERROR',
    }}
  />
);

export const TitleOnly = () => (
  <Toast
    message={{
      id: '14',
      title: 'Notification title only',
    }}
  />
);

export const NoIcon = () => (
  <Toast
    message={{
      id: '15',
      title: 'Notification no icon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      noIcon: true,
    }}
  />
);
