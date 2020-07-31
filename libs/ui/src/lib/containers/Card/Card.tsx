import React from 'react';

import * as S from './Card.style';

export type CardProps = {
  children?: React.ReactNode;
  variant?: 'default' | 'outlined';
};

const Card = ({
  children,
  variant = 'default',
}: CardProps) => {
  return (
    <S.Card variant={variant}>
      {children}
    </S.Card>
  );
};

export default Card;
