import React, { useEffect, useState, memo } from 'react';

import { Text } from '../../display';
import { Button } from '../../forms';
import { useModal } from './Modal.context';

import * as S from './Modal.style';
import { ModalProps } from './ModalProps';

const Modal = ({
  id,
  title,
  type,
  confirm,
  dismiss,
  children,
  disableBackdropClick,
}: ModalProps) => {
  const [fade, setFade] = useState<boolean>(false);
  const { removeModal } = useModal();

  useEffect(() => {
    setFade(true);
  }, []);

  const backdropClicked = (e: React.MouseEvent) => {
    if (disableBackdropClick && e.target === e.currentTarget) {
      removeModal(id);
    }
  };

  return (
    <S.Backdrop fade={fade} onClick={backdropClicked}>
      <S.Container fade={fade} id={id}>
        <S.Header>
          <Text variant="heading-05" component="h5">
            {title}
          </Text>
          <S.Close onClick={() => removeModal(id)} />
        </S.Header>
        <S.Containt>{children}</S.Containt>
        {type !== 'blank' && (
          <S.Footer>
            {type === 'dialog' && (
              <>
                <Button
                  scale="narrow"
                  appearance="tertiary"
                  onClick={() => {
                    dismiss?.handler?.();
                    removeModal(id);
                  }}
                >
                  {dismiss?.label || 'Cancelar'}
                </Button>
                <Button
                  scale="narrow"
                  onClick={() => {
                    confirm?.handler?.();
                    removeModal(id);
                  }}
                >
                  {confirm?.label || 'Confirmar'}
                </Button>
              </>
            )}

            {type === 'alert' && (
              <Button
                scale="narrow"
                appearance="tertiary"
                onClick={() => {
                  confirm?.handler?.();
                  removeModal(id);
                }}
              >
                {confirm?.label || 'Confirmar'}
              </Button>
            )}
          </S.Footer>
        )}
      </S.Container>
    </S.Backdrop>
  );
};

export default memo(Modal);
