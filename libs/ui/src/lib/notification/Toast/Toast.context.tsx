import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

// eslint-disable-next-line import/no-cycle
import ToastContainer from './Toast.container';

import { ToastMessageProps } from './ToastProps';

interface ToastContextData {
  addToast(message: Omit<ToastMessageProps, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessageProps[]>([]);

  const addToast = useCallback(
    ({
      type,
      title,
      description,
      autoClose = true,
      timeToClose = 3000,
    }: Omit<ToastMessageProps, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
        autoClose,
        timeToClose,
      };

      setMessages(prevMessages => [...prevMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(prevMessages =>
      prevMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
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
