import React from 'react';

import Toast from './Toast';
import { ToastProvider, useToast } from './Toast.context';

export default {
  title: 'Notification/Toast',
  component: ToastProvider,
};

const ActionButtonsToast = () => {
  const { addToast } = useToast();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '500px',
      }}
    >
      <button
        onClick={() => {
          addToast({
            title: 'Mensagem de INFORMAÇÃO',
            description: 'Esse é um exemplo de uma mensagem de INFORMAÇÃO',
            type: 'INFO',
          });
        }}
      >
        Info
      </button>

      <button
        onClick={() => {
          addToast({
            title: 'Mensagem de SUCESSO',
            description: 'Esse é um exemplo de uma mensagem de SUCESSO',
            type: 'SUCCESS',
          });
        }}
      >
        Sucesso
      </button>

      <button
        onClick={() => {
          addToast({
            title: 'Mensagem de AVISO',
            description: 'Esse é um exemplo de uma mensagem de AVISO',
            type: 'WARNING',
          });
        }}
      >
        Warning
      </button>

      <button
        onClick={() => {
          addToast({
            title: 'Mensagem de ERRO',
            description: 'Esse é um exemplo de uma mensagem de ERRO',
            type: 'ERROR',
          });
        }}
      >
        Error
      </button>

      <button
        onClick={() => {
          addToast({
            title: 'Abrir e NÃO fechar automaticamente',
            description:
              'Esse é um exemplo de uma mensagem que vai abrir e NÃO vai fechar automaticamente',
            type: 'INFO',
            autoClose: false,
          });
        }}
      >
        Não fechar
      </button>

      <button
        onClick={() => {
          addToast({
            title: 'Fechar depois de 10 segundos',
            description:
              'Esse é um exemplo de uma mensagem que vai abrir e, fechar somende depois de 10 segundos',
            type: 'INFO',
            timeToClose: 10000,
          });
        }}
      >
        Fechar depois de 10 segundos
      </button>
    </div>
  );
};

export const ActionToast = () => (
  <ToastProvider>
    <ActionButtonsToast />
  </ToastProvider>
);

export const Info = () => (
  <Toast
    message={{
      id: '10',
      title: 'Toast teste',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    }}
  />
);

export const Success = () => (
  <Toast
    message={{
      id: '10',
      title: 'Toast teste',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'SUCCESS',
    }}
  />
);

export const Warning = () => (
  <Toast
    message={{
      id: '10',
      title: 'Toast teste',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'WARNING',
    }}
  />
);

export const Error = () => (
  <Toast
    message={{
      id: '10',
      title: 'Toast teste',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'ERROR',
    }}
  />
);
