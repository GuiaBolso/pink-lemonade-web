import React, { createContext, useContext, useCallback, useState } from 'react';
import { createId } from '@guiabolsobr/utils';

import {
  ModalContextProps,
  ModalProviderProps,
  ModalProps,
  DialogProps,
  AlertProps,
  BlankModalProps,
  HandleModalProps,
} from './ModalProps';
import ModalContainer from './Modal.container';

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState([]);

  const handleModal = useCallback(
    ({ id = createId('modal'), content, ...rest }: HandleModalProps) => {
      const modal: ModalProps = {
        ...rest,
        id,
        children: content,
      };

      setModals(prevModals => [...prevModals, modal]);
    },
    [],
  );

  const addDialog = useCallback(
    (props: DialogProps) => handleModal({ ...props, type: 'dialog' }),
    [handleModal],
  );

  const addAlert = useCallback(
    (props: AlertProps) => handleModal({ ...props, type: 'alert' }),
    [handleModal],
  );

  const addModal = useCallback(
    (props: BlankModalProps) => handleModal({ ...props, type: 'blank' }),
    [handleModal],
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
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};

export { ModalProvider, useModal };
