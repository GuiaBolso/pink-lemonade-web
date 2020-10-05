import React from 'react';

import * as S from './InfoBanner.style';

type InfoBannerProps = {
  children: React.ReactNode;
  type: 'base' | 'text-button' | 'text-close';
};

const InfoBanner = ({ children, type }: InfoBannerProps) => (
  <S.Container>
    <S.Content>
      {children}
      {type !== 'text-button' && <S.Close />}
      {type !== 'text-close' && (
        <S.BannerButton label="Button" size="small" scale="narrow" />
      )}
    </S.Content>
  </S.Container>
);

export default InfoBanner;
