import React from 'react';

import { Text } from '../../../display/Text';

import * as S from './CardContent.style';

export type CardFooterProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardFooterProps) => {
  return (
    <S.CardContent>
      <Text component="p" variant="subtitle-medium">
        {children}
      </Text>
    </S.CardContent>
  );
};

export default Card;
