import React from 'react';

import { Text } from '../../../display/Text';

import * as S from './CardContent.style';

export type CardFooterProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardFooterProps) => {
  return (
    <S.CardContent>
      {typeof children === 'string' ? (
        <Text component="p" variant="subtitle-medium">
          {children}
        </Text>
      ) : (
        children
      )}
    </S.CardContent>
  );
};

export default Card;
