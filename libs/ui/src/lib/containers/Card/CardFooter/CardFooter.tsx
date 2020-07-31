import React from 'react';

import * as S from './CardFooter.style';

export type CardFooterProps = {
  addendum?: boolean;
  action?: React.ReactNode;
  description?: string;
};

const Card = ({ action, description, addendum = false }: CardFooterProps) => {
  return (
    <S.CardFooter addendum={addendum}>
      {description && <S.CardFooterText>{description}</S.CardFooterText>}

      {action && <>{action}</>}
    </S.CardFooter>
  );
};

export default Card;
