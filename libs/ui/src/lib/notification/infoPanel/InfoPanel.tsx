import React from 'react';

import warningIcon from '../../../assets/images/icons/warning-blue.svg';

import * as S from './InfoPanel.style';

type InfoPanelProps = {
  imagePath?: string;
  children: React.ReactNode;
};

const InfoPanel = ({ imagePath = warningIcon, children }: InfoPanelProps) => (
  <S.Container>
    <S.Image src={imagePath} alt="aviso" />
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default InfoPanel;
