import React from 'react';

import * as S from './FloatingCard.style';

export interface FloatingCardProps {
  category: string;
  title: string;
  description: string;
}

const FloatingCard = ({ category, title, description }: FloatingCardProps) => (
  <S.FloatingCard>
    <S.Category variant="heading-05" component="h3">
      {category}
    </S.Category>

    <S.Title variant="heading-04" component="h1">
      {title}
    </S.Title>

    <S.Description variant="body-small" component="p">
      {description}
    </S.Description>
  </S.FloatingCard>
);

export default FloatingCard;
