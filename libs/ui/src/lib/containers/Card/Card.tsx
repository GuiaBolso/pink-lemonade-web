import React from 'react';

import { Text } from '../../display/Text';

import * as S from './Card.style';

interface Card {
  title?: string;
  icon?: React.ReactNode;
  content?: string;
  children?: React.ReactNode;
}

const Card = ({ title, icon, content, children }: Card) => {
  return (
    <S.Card>
      <S.Header>
        <S.Title component="h4" variant="heading-05">
          {title}
        </S.Title>

        {icon && <S.IconContainer>{icon}</S.IconContainer>}
      </S.Header>

      {title && content && <S.Spacer />}

      {content && (
        <>
          <Text component="p" variant="body-02">
            {content}
          </Text>
        </>
      )}

      {children}
    </S.Card>
  );
};

export default Card;
