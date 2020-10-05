import React, { useCallback, useState } from 'react';

import * as S from './InfoBanner.style';

type InfoBannerProps = {
  children: React.ReactNode;
  confirm?: {
    label: string;
    handler?: () => void;
  };
  opened: boolean;
  type: 'base' | 'text-button' | 'text-close';
};

const InfoBanner = ({
  children,
  confirm,
  opened = true,
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
    <S.Container isOpen={isOpen}>
      <S.Content>
        {children}
        {type !== 'text-button' && <S.Close onClick={handleClose} />}
        {type !== 'text-close' && (
          <S.BannerButton
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
