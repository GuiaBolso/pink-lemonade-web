import React from 'react';

import { Text } from '../../display/Text';

import * as S from './Card.style';

export type CardProps = {
  title?: string;
  titleIcon?: React.ReactNode;
  overlineText?: string;
  overlineTextIcon?: React.ReactNode;
  content?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'default' | 'outlined';
};

const Card = ({
  title,
  titleIcon,
  overlineText,
  overlineTextIcon,
  content,
  children,
  variant = 'default',
}: CardProps) => {
  return (
    <S.Card variant={variant}>
      {title && (
        <S.CardHeader>
          {overlineText && (
            <S.OverlineText variant="overline-small">
              {overlineText}

              {overlineTextIcon && (
                <S.IconContainer>{overlineTextIcon}</S.IconContainer>
              )}
            </S.OverlineText>
          )}

          <S.CardTitle component="h4" variant="heading-05">
            {title}

            {titleIcon && <S.IconContainer>{titleIcon}</S.IconContainer>}
          </S.CardTitle>
        </S.CardHeader>
      )}

      {title && content && <S.Spacer />}

      {content && (
        <S.CardContent>
          <Text component="p" variant="subtitle-medium">
            {content}
          </Text>
        </S.CardContent>
      )}

      {children}
    </S.Card>
  );
};

export default Card;
