import React, { useEffect, useState, memo } from 'react';

import { useModal } from './Modal.context';

import * as S from './Modal.style';
import { ModalProps } from './ModalProps';

const Modal = ({ id, title, type, confirm, dismiss, children }: ModalProps) => {
  const [fade, setFade] = useState<boolean>(false);
  const { removeModal } = useModal();

  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <S.Overlay fade={fade}>
      <S.Container fade={fade}>
        <S.Header>
          {title}
          <S.Close onClick={() => removeModal(id)} />
        </S.Header>
        <S.Containt>{children}</S.Containt>
        {type !== 'blank' && (
          <S.Footer>
            {type === 'dialog' && (
              <>
                <button
                  onClick={() => {
                    confirm?.handler?.();
                    removeModal(id);
                  }}
                >
                  {confirm?.label || 'Confirmar'}
                </button>
                <button
                  onClick={() => {
                    dismiss?.handler?.();
                    removeModal(id);
                  }}
                >
                  {dismiss?.label || 'Cancelar'}
                </button>
              </>
            )}

            {type === 'alert' && (
              <button
                onClick={() => {
                  confirm?.handler?.();
                  removeModal(id);
                }}
              >
                {confirm?.label || 'Confirmar'}
              </button>
            )}
          </S.Footer>
        )}
      </S.Container>
    </S.Overlay>
  );
};

export default memo(Modal);
