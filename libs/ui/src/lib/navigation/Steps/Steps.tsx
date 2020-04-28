import React from 'react';

import * as S from './Steps.style';

interface Steps {
  totalSteps: number;
  currentStep: number;
}

const Steps = ({ totalSteps, currentStep }: Steps) => {
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

export default Steps;
