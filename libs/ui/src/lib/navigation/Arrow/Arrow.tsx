import React from 'react';

import ArrowIcon from './ArrowIcon';

import * as S from './Arrow.style';

type ArrowProps = {
  label: 'Anterior' | 'Próximo';
  index: number;
  content: string;
  icon?: React.ReactNode;
};

const Arrow = ({ label = 'Anterior', index, content, icon }: ArrowProps) => (
  <S.ArrowContainer label={label}>
    <div>
      <S.Label variant="body-02" component="span">
        {label}
      </S.Label>

      <S.Content variant="heading-05" component="strong">
        <span>{`${index}. `}</span>
        {content}
      </S.Content>
    </div>

    <S.IconContainer label={label}>{icon || <ArrowIcon />}</S.IconContainer>
  </S.ArrowContainer>
);

export default Arrow;
