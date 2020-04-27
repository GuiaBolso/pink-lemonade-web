import React, { useState } from 'react';
import { FormControlLabelProps } from '@material-ui/core';

import * as S from './Checkbox.style';

type CheckboxProps = {
  name?: string;
  checked?: boolean;
  variant?: 'simple' | 'stand-alone';
} & Partial<FormControlLabelProps>;

const Checkbox = ({
  label,
  name,
  checked = false,
  disabled = false,
  variant = 'simple',
  ...rest
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <S.FormControlLabel
      {...rest}
      label={label}
      disabled={disabled}
      variant={variant}
      control={
        <S.Checkbox checked={isChecked} name={name} onChange={handleChange} />
      }
    />
  );
};

export default Checkbox;
