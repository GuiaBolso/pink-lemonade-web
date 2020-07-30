import React, { memo } from 'react';
import { Text, themeProps } from '@guiabolsobr/ui';
import { useTheme } from 'emotion-theming';
import check from '../../../assets/images/icons/check.svg';

import * as S from './ProgressBar.style';

type ProgressBarProps = {
  variant?: 'determinate' | 'indeterminate';
  value?: number;
  label: string;
  color?: {
    line: string;
    subline: string;
  };
};

const ProgressBar = ({
  variant = 'indeterminate',
  value,
  label,
  color,
}: ProgressBarProps) => {
  const theme = useTheme<themeProps>();
  const TEXT_VARIATION =
    theme.name === 'connect' ? 'caption' : 'subtitle-small';
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
        <Text variant={TEXT_VARIATION}>{label}</Text>
        {value?.toString &&
          (value === 100 ? (
            <S.CheckIcon src={check} alt="sucesso" />
          ) : (
            <Text variant={TEXT_VARIATION}>{value}%</Text>
          ))}
      </S.Info>
    </S.Container>
  );
};

export default memo(ProgressBar);
