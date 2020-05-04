import React, { memo } from 'react';
import {
  FormControlLabelProps,
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core';

import * as S from './Checkbox.style';

type CheckboxProps = {
  name?: string;
  variant?: 'simple' | 'stand-alone';
} & Partial<FormControlLabelProps>;

const Checkbox = ({
  label,
  name,
  disabled = false,
  variant = 'simple',
  defaultChecked,
  ...rest
}: CheckboxProps) => {
  let checkboxProps: MuiCheckboxProps = {
    name,
  };

  defaultChecked &&
    (checkboxProps = {
      ...checkboxProps,
      defaultChecked,
    });

  return (
    <S.FormControlLabel
      {...rest}
      label={label}
      disabled={disabled}
      variant={variant}
      control={<S.Checkbox {...checkboxProps} />}
    />
  );
};

export default memo(Checkbox);
