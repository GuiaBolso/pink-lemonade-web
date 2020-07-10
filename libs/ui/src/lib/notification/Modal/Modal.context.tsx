import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import {
  ModalContextProps,
  ModalProviderProps,
  ModalProps,
  DialogProps,
  AlertProps,
  BlankModalProps,
} from './ModalProps';
import ModalContainer from './Modal.container';

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState([]);

  const addDialog = useCallback(
    ({ title, confirm, dismiss, id = uuid(), content }: DialogProps) => {
      const modal: ModalProps = {
        id,
        type: 'dialog',
        title,
        confirm,
        dismiss,
        children: content,
      };

      setModals(prevModals => [...prevModals, modal]);
    },
    [],
  );

  const addAlert = useCallback(
    ({ title, confirm, id = uuid(), content }: AlertProps) => {
      const modal: ModalProps = {
        id,
        type: 'alert',
        title,
        confirm,
        children: content,
      };

      setModals(prevModals => [...prevModals, modal]);
    },
    [],
  );

  const addModal = useCallback(
    ({ title, id = uuid(), content }: BlankModalProps) => {
      console.log('content', content);
      const modal: ModalProps = {
        id,
        type: 'blank',
        title,
        children: content,
      };

      setModals(prevModals => [...prevModals, modal]);
    },
    [],
  );

  const removeModal = useCallback((id: string) => {
    setModals(prevModals => prevModals.filter(modal => modal.id !== id));
  }, []);

  return (
    <ModalContext.Provider
      value={{ addModal, addDialog, addAlert, removeModal, modals }}
    >
      {children}

      <ModalContainer modals={modals} />
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ToastProvider');
  }

  return context;
};

export { ModalProvider, useModal };
