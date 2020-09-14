import React, { memo } from 'react';

import * as S from './Steps.style';

export interface StepsProps {
  totalSteps: number;
  currentStep: number;
}

const Steps = ({ totalSteps, currentStep }: StepsProps) => {
  return (
    <S.StepsContainer>
      {totalSteps > 0 &&
        Array(totalSteps)
          .fill('')
          .map((_, step) => (
            <S.Step key={step} {...(step === currentStep && { active: true })}>
              {step}
            </S.Step>
          ))}
    </S.StepsContainer>
  );
};

export default memo(Steps);
