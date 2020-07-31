import React, { memo } from 'react';

import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import * as Styled from './Button.style';

import { ButtonColorProps } from '../../../typings/ButtonColorProps';

export type ButtonProps = {
  label?: string;
  appearance?: 'primary' | 'secondary' | 'tertiary';
  scale?: 'wide-regular' | 'fixed' | 'wide-thin' | 'narrow';
} & ButtonColorProps &
  MuiButtonProps;

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
    primary: 'contained' as const,
    secondary: 'outlined' as const,
    terdiary: 'text' as const,
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
