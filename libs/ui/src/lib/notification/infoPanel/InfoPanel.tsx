import { CustomThemeProps } from '../../../typings/CustomThemeProps';
import React from 'react';

import warningIcon from '../../../assets/images/icons/warning-blue.svg';

import * as S from './InfoPanel.style';

export type FeedbackType = keyof CustomThemeProps['colors']['feedback'];

type InfoPanelProps = {
  imagePath?: string;
  feedbackType?: FeedbackType;
  children: React.ReactNode;
};

const InfoPanel = ({
  feedbackType = 'notification',
  imagePath = warningIcon,
  children,
}: InfoPanelProps) => (
  <S.Container feedbackType={feedbackType}>
    <S.Image src={imagePath} alt="aviso" />
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default InfoPanel;
