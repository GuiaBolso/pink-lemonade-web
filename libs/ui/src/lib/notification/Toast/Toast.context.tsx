import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

// eslint-disable-next-line import/no-cycle
import ToastContainer from './Toast.container';

import { ToastMessageProps } from './Toast.props';

type ToastContextData = {
  addToast(message: Omit<ToastMessageProps, 'id'>): void;
  toastSuccess(props: Omit<ToastMessageProps, 'type' | 'id'>): void;
  toastAlert(props: Omit<ToastMessageProps, 'type' | 'id'>): void;
  toastError(props: Omit<ToastMessageProps, 'type' | 'id'>): void;
  toastNotification(props: Omit<ToastMessageProps, 'type' | 'id'>): void;
  removeToast(id: string): void;
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
    }: Omit<ToastMessageProps, 'id'>) => {
      const id = uuid();

      const newToast = {
        id,
        title,
        description,
        type,
        noIcon,
        autoClose,
        timeToClose,
      };

      setMessages(prevMessages => [...prevMessages, newToast]);
    },
    [],
  );

  const toastSuccess = useCallback(
    (props: Omit<ToastMessageProps, 'type' | 'id'>) =>
      addToast({ ...props, type: 'SUCCESS' }),
    [addToast],
  );

  const toastAlert = useCallback(
    (props: Omit<ToastMessageProps, 'type' | 'id'>) =>
      addToast({ ...props, type: 'ALERT' }),
    [addToast],
  );

  const toastError = useCallback(
    (props: Omit<ToastMessageProps, 'type' | 'id'>) =>
      addToast({ ...props, type: 'ERROR' }),
    [addToast],
  );

  const toastNotification = useCallback(
    (props: Omit<ToastMessageProps, 'type' | 'id'>) =>
      addToast({ ...props, type: 'NOTIFICATION' }),
    [addToast],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(prevMessages =>
      prevMessages.filter(message => message.id !== id),
    );
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
