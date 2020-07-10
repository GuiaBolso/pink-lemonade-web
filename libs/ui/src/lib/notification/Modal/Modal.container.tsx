import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './Modal';
import { ModalProps } from './ModalProps';

type ModalContainerProps = {
  modals: ModalProps[];
};

const ModalContainer = ({ modals }: ModalContainerProps) => {
  if (!modals.length) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      {modals.map(modal => (
        <Modal key={modal.id} {...modal} />
      ))}
    </>,
    document.querySelector('#root'),
  );
};

export default ModalContainer;
