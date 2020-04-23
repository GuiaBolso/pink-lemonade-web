import React, { useState } from 'react';
import { FormControlLabel } from '@material-ui/core';

import * as S from './Checkbox.style';

type CheckboxProps = {
  label?: React.ReactElement;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  variant?: 'simple' | 'stand-alone';
};

const Checkbox = ({
  label,
  name,
  checked = false,
  disabled = false,
  variant = 'simple',
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <S.FormControlLabel
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
