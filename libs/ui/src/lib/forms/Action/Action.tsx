import React from 'react';

import { ButtonProps } from '../Button/Button';

import ArrowLeft from './ArrowLeft.icon';
import ArrowRight from './ArrowRight.icon';

import * as S from './Action.style';

type ActionProps = {
  label: string;
  arrowPosition?: 'leading' | 'trailing';
  wide?: boolean;
} & ButtonProps;

export const Action = ({
  label,
  wide,
  arrowPosition,
  ...rest
}: ActionProps) => (
  <S.Action
    label={label}
    arrowPosition={arrowPosition}
    startIcon={arrowPosition === 'leading' && <ArrowLeft />}
    endIcon={arrowPosition === 'trailing' && <ArrowRight />}
    wide={wide}
    disableRipple
    {...rest}
  ></S.Action>
);

export default Action;
