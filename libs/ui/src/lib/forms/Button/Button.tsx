import React, { memo } from 'react';

import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import * as Styled from './Button.style';

type ButtonProps = {
  label?: string;
  appearance?: 'primary' | 'secondary' | 'tertiary';
  scale?: 'wide-regular' | 'fixed' | 'wide-thin' | 'narrow';
  customColor?: {
    base: string;
    hover: string;
    active: string;
  };
} & MuiButtonProps;

export const Button = ({
  disabled = false,
  label,
  appearance = 'primary',
  children,
  scale = 'wide-regular',
  customColor,
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
      customColor={customColor}
      variant={mapVariants[appearance]}
      disabled={disabled}
      disableElevation
    >
      {label || children}
    </Styled.Button>
  );
};

export default memo(Button);