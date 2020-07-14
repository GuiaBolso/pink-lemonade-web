import React, { useEffect, useState, memo, useCallback } from 'react';

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
  opened = false,
}: ModalProps) => {
  const [fade, setFade] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(opened);
  const { removeModal } = useModal();
  const DELAY_TO_FADE_IN = 100;
  const DELAY_TO_FADE_OUT = 300;

  useEffect(() => {
    setIsOpened(true);
    setTimeout(() => {
      setFade(true);
    }, DELAY_TO_FADE_IN);
  }, []);

  const closeModal = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      removeModal?.(id);
      setIsOpened(false);
    }, DELAY_TO_FADE_OUT);
  }, []);

  const backdropClicked = useCallback(
    (e: React.MouseEvent) => {
      if (disableBackdropClick && e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal, disableBackdropClick],
  );

  return (
    <S.Backdrop fade={fade} onClick={backdropClicked} opened={isOpened}>
      <S.Container fade={fade} id={id}>
        <S.Header>
          <Text variant="heading-05" component="h5">
            {title}
          </Text>
          <S.Close onClick={closeModal} />
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
                    closeModal();
                  }}
                >
                  {dismiss?.label || 'Cancelar'}
                </Button>
                <Button
                  scale="narrow"
                  onClick={() => {
                    confirm?.handler?.();
                    removeModal?.(id);
                    setFade(false);
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
                  removeModal?.(id);
                  setFade(false);
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
