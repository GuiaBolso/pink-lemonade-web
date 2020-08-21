import React, { createContext, useContext, useCallback, useState } from 'react';
import { createId } from '@guiabolsobr/utils';

// eslint-disable-next-line import/no-cycle
import ToastContainer from './Toast.container';

import { ToastMessageProps } from './Toast.props';

type ToastContextData = {
  addToast(message: ToastMessageProps): void;
  toastSuccess(props: Omit<ToastMessageProps, 'type'>): void;
  toastAlert(props: Omit<ToastMessageProps, 'type'>): void;
  toastError(props: Omit<ToastMessageProps, 'type'>): void;
  toastNotification(props: Omit<ToastMessageProps, 'type'>): void;
  removeToast(id: string): void;
  clearToasts(): void;
};

type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [messages, setMessages] = useState<ToastMessageProps[]>([]);

  const addToast = useCallback(
    ({
      title,
      description,
      type = 'NOTIFICATION',
      noIcon = false,
      autoClose = true,
      timeToClose = 4000,
      id = createId('toast'),
    }: ToastMessageProps) => {
      const newToast = {
        id,
        title,
        description,
        type,
        noIcon,
        autoClose,
        timeToClose,
      };

      setMessages(prevMessages => [
        ...prevMessages.filter(({ id }) => id !== newToast.id),
        newToast,
      ]);
    },
    [],
  );

  const toastSuccess = useCallback(
    (props: Omit<ToastMessageProps, 'type'>) =>
      addToast({ ...props, type: 'SUCCESS' }),
    [addToast],
  );

  const toastAlert = useCallback(
    (props: Omit<ToastMessageProps, 'type'>) =>
      addToast({ ...props, type: 'ALERT' }),
    [addToast],
  );

  const toastError = useCallback(
    (props: Omit<ToastMessageProps, 'type'>) =>
      addToast({ ...props, type: 'ERROR' }),
    [addToast],
  );

  const toastNotification = useCallback(
    (props: Omit<ToastMessageProps, 'type'>) =>
      addToast({ ...props, type: 'NOTIFICATION' }),
    [addToast],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(prevMessages =>
      prevMessages.filter(message => message.id !== id),
    );
  }, []);

  const clearToasts = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        toastSuccess,
        toastAlert,
        toastError,
        toastNotification,
        removeToast,
        clearToasts,
      }}
    >
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };
