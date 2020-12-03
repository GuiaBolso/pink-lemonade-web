import React, { memo } from 'react';
import { Text } from '@guiabolsobr/ui';

import check from '../../../assets/images/icons/check.svg';

import * as S from './ProgressBar.style';

export type ProgressBarProps = {
  variant?: 'determinate' | 'indeterminate';
  value?: number;
  label: string;
  color?: {
    line: string;
    subline: string;
  };
};

export const ProgressBar = ({
  variant = 'indeterminate',
  value,
  label,
  color,
}: ProgressBarProps) => {
  if ((value && value < 0) || value > 100) {
    throw new Error('The value field must be an integer between 0 and 100');
  }
  return (
    <S.Container>
      <S.Line lineColor={color?.line}>
        {variant === 'indeterminate' && (
          <>
            <S.Subline animation="inc" sublineColor={color?.subline} />
            <S.Subline animation="dec" sublineColor={color?.subline} />
          </>
        )}
        {variant === 'determinate' && (
          <S.Subline value={value} sublineColor={color?.subline} />
        )}
      </S.Line>
      <S.Info>
        <Text variant="subtitle-small">{label}</Text>
        {value?.toString &&
          (value === 100 ? (
            <S.CheckIcon src={check} alt="sucesso" />
          ) : (
            <Text variant="subtitle-small">{value}%</Text>
          ))}
      </S.Info>
    </S.Container>
  );
};

export default memo(ProgressBar);
