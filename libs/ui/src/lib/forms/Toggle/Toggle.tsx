import React, { memo } from 'react';
import { FormControlLabelProps, SwitchProps } from '@material-ui/core';

import Switch from '@material-ui/core/Switch';

import * as S from './Toggle.style';

type ToggleProps = {
  name?: string;
  size?: 'small' | 'medium';
} & Partial<FormControlLabelProps>;

const Toggle = ({
  label,
  name,
  disabled = false,
  size = 'medium',
  defaultChecked,
  ...rest
}: ToggleProps) => {
  let toggleProps: SwitchProps = { name };

  defaultChecked &&
    (toggleProps = {
      ...toggleProps,
      defaultChecked,
    });

  return (
    <S.FormControlLabel
      {...rest}
      label={label}
      disabled={disabled}
      control={<Switch {...toggleProps} size={size} />}
    />
  );
};

export default memo(Toggle);
