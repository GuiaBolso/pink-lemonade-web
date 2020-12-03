import React from 'react';

import ArrowIcon from './ArrowIcon';

import * as S from './Arrow.style';

export type ArrowProps = {
  label: 'Anterior' | 'Próximo';
  content: string;
  icon?: React.ReactNode;
};

const Arrow = ({ label = 'Anterior', content, icon }: ArrowProps) => (
  <S.ArrowContainer label={label}>
    <div>
      <S.Label variant="body-small" component="span">
        {label}
      </S.Label>

      <S.VerticalSpace />

      <S.Content variant="heading-05" component="strong">
        {content}
      </S.Content>
    </div>

    <S.IconContainer label={label}>{icon || <ArrowIcon />}</S.IconContainer>
  </S.ArrowContainer>
);

export default Arrow;
