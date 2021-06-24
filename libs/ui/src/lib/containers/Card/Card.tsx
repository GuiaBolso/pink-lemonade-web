import React from 'react';

import * as S from './Card.style';

export type CardProps = React.ComponentProps<'article'> & {
  variant?: 'default' | 'outlined';
};

const Card = ({ children, variant = 'default', ...rest }: CardProps) => {
  return (
    <S.Card variant={variant} {...rest}>
      {children}
    </S.Card>
  );
};

export default Card;
