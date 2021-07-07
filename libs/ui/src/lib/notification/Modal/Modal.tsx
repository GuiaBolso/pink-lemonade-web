import React, { useEffect, useState, memo, useCallback } from 'react';
import { useBreakpoints } from '@guiabolsobr/utils';

import { Text } from '../../display';
import { Button } from '../../forms';
import { useModal } from './Modal.context';

import * as S from './Modal.style';
import { ModalProps } from './ModalProps';

const Modal = ({
  id,
  title,
  subtitle,
  type,
  confirm,
  dismiss,
  children,
  disableBackdropClick,
  backdropMode,
  opened = false,
}: ModalProps) => {
  const [fade, setFade] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(opened);
  const { lessThan } = useBreakpoints();

  const { removeModal } = useModal();
  const DELAY_TO_FADE_IN = 100;
  const DELAY_TO_FADE_OUT = 300;

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      setIsOpened(true);
      setTimeout(() => {
        setFade(true);
      }, DELAY_TO_FADE_IN);
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  const closeModal = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      removeModal?.(id);
      setIsOpened(false);
    }, DELAY_TO_FADE_OUT);
  }, [id, removeModal]);

  const backdropClicked = useCallback(
    (e: React.MouseEvent) => {
      if (!disableBackdropClick && e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal, disableBackdropClick],
  );

  return (
    <S.Backdrop
      className="gb-modal"
      fade={fade}
      onClick={backdropClicked}
      opened={isOpened}
      backdropMode={backdropMode}
    >
      <S.Container
        className="gb-modal__container"
        fade={fade}
        id={id}
        backdropMode={backdropMode}
      >
        <S.Header>
          <Text variant="heading-05" component="h5">
            {title}
          </Text>
          <Text variant="subtitle-medium" component="h6">
            {subtitle}
          </Text>
          <S.Close onClick={closeModal} />
        </S.Header>
        <S.Containt>{children}</S.Containt>
        {type !== 'blank' && (
          <S.Footer>
            {type === 'dialog' && (
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
            )}

            <Button
              scale={lessThan({ breakpoint: 'medium' }) ? 'fixed' : 'narrow'}
              className="primary"
              appearance={type === 'alert' ? 'tertiary' : 'primary'}
              onClick={() => {
                confirm?.handler?.();
                closeModal();
              }}
            >
              {confirm?.label || 'Confirmar'}
            </Button>
          </S.Footer>
        )}
      </S.Container>
    </S.Backdrop>
  );
};

export default memo(Modal);
