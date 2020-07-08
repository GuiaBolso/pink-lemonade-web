import React from 'react';

import Toast from './Toast';
import { ToastProvider, useToast } from './Toast.context';

export default {
  title: 'Notification/Toast',
  component: ToastProvider,
  decorators: [
    /* eslint-disable-next-line */
    (story: any) => (
      <div
        style={{
          border: '1px solid #d0d',
          maxWidth: '450px',
          position: 'relative',
          minHeight: '400px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Info = () => {
  const { addToast } = useToast();

  console.log('@ addToast', addToast);

  const handleAddToast = () => {
    console.log('@ story');

    addToast({
      title: 'Mensagem de sucesso',
      description: 'Esse é um exemplo de uma mensagem de sucesso',
      type: 'SUCCESS',
    });
  };

  return (
    <div>
      <ToastProvider>
        <button onClick={handleAddToast}>Adicionar Toast de sucesso</button>

        <Toast
          message={{
            id: '10',
            title: 'Toast teste',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          }}
        />

        <Toast
          message={{
            type: 'ERROR',
            id: '10',
            title: 'Toast teste',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          }}
        />
      </ToastProvider>
    </div>
  );
};

export const ComponentToast = () => (
  <ToastProvider>
    <Info />
  </ToastProvider>
);
