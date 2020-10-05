import React, { useCallback, useState } from 'react';

import * as S from './InfoBanner.style';

export type InfoBannerProps = {
  children: React.ReactNode;
  confirm?: {
    label: string;
    handler?: () => void;
  };
  opened?: boolean;
  position?: 'top' | 'bottom';
  type: 'base' | 'text-button' | 'text-close';
};

const InfoBanner = ({
  children,
  confirm,
  opened = true,
  position = 'bottom',
  type,
}: InfoBannerProps) => {
  const [isOpen, setIsOpen] = useState(opened);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleConfirm = useCallback(() => {
    confirm?.handler?.();
    handleClose();
  }, []);

  return (
    <S.Container position={position} isOpen={isOpen} data-testid="container">
      <S.Content>
        {children}
        {type !== 'text-button' && (
          <S.Close data-testid="close-btn" onClick={handleClose} />
        )}
        {type !== 'text-close' && (
          <S.ConfirmButton
            label={confirm?.label || 'Concordo'}
            onClick={handleConfirm}
            size="small"
            scale="narrow"
          />
        )}
      </S.Content>
    </S.Container>
  );
};

export default InfoBanner;
