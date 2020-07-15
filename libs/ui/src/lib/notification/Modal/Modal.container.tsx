import React from 'react';

import Modal from './Modal';
import { ModalProps } from './ModalProps';

type ModalContainerProps = {
  modals: ModalProps[];
};

const ModalContainer = ({ modals }: ModalContainerProps) => {
  if (!modals.length) {
    return null;
  }
  return (
    <>
      {modals.map(modal => (
        <Modal key={modal.id} {...modal} />
      ))}
    </>
  );
};

export default ModalContainer;
