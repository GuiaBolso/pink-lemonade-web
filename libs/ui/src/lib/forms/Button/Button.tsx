import React from 'react';

// import { ExtendButtonBase, ButtonTypeMap } from '@material-ui/core';

import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import * as Styled from './Button.style';

// type ButtonProps = ExtendButtonBase<ButtonTypeMap<{}, 'button'>> & {
type ButtonProps = MuiButtonProps & {
  label?: string;
  appearance?: 'primary' | 'secondary' | 'terdiary';
  scale?: 'wide-regular' | 'fixed' | 'wide-thin' | 'narrow';
};

export const Button = ({
  disabled = false,
  label,
  appearance = 'primary',
  children,
  scale = 'wide-regular',
  ...rest
}: ButtonProps) => {
  const mapVariants = {
    primary: 'contained' as 'contained',
    secondary: 'outlined' as 'outlined',
    terdiary: 'text' as 'text',
  };

  const getScale = () => {
    const mapScale = {
      fixed: {
        fullWidth: true,
      },
      'wide-thin': {
        size: 'small',
      },
      narrow: {
        narrow: true,
      },
    };

    return mapScale[scale] || {};
  };

  return (
    <Styled.Button
      {...rest}
      {...getScale()}
      variant={mapVariants[appearance]}
      disabled={disabled}
      disableElevation
    >
      {label || children}
    </Styled.Button>
  );
};

export default Button;
