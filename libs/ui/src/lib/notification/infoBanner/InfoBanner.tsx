import React, { useCallback } from 'react';

import * as S from './InfoBanner.style';

type InfoBannerProps = {
  children: React.ReactNode;
  type: 'base' | 'text-button' | 'text-close';
  confirm?: {
    label: string;
    handler?: () => void;
  };
};

const InfoBanner = ({ children, type, confirm }: InfoBannerProps) => {
  const handleConfirm = useCallback(() => {
    confirm?.handler?.();
  }, []);

  return (
    <S.Container>
      <S.Content>
        {children}
        {type !== 'text-button' && <S.Close />}
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
