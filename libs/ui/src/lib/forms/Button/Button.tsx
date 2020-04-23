import React from 'react';

import * as Styled from './Button.style';

type ButtonProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
};

export const Button = ({
  disabled = false,
  fullWidth,
  label,
  size,
  variant,
}: ButtonProps) => {
  return (
    <Styled.Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      disableElevation
      disableRipple
    >
      {label}
    </Styled.Button>
  );
};

export default Button;
