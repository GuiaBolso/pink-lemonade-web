import React from 'react';

import * as S from './InfoBanner.style';

type InfoBannerProps = {
  children: React.ReactNode;
  showActionBtn?: boolean;
  showCloseBtn?: boolean;
};

const InfoBanner = ({
  children,
  showActionBtn,
  showCloseBtn,
}: InfoBannerProps) => (
  <S.Container>
    <S.Content>
      {children}
      {showCloseBtn && <S.Close />}
      {showActionBtn && (
        <S.BannerButton label="Button" size="small" scale="narrow" />
      )}
    </S.Content>
  </S.Container>
);

export default InfoBanner;
