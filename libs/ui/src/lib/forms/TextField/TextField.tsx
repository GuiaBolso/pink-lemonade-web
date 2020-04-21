import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditOutlined from '@material-ui/icons/EditOutlined';

import * as Styled from './TextField.style';

type TextFieldProps = {
  label: string;
  error?: boolean;
  disabled?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
};

export const TextField = ({
  label,
  error = false,
  disabled = false,
  inputRef,
  helperText,
  icon,
  iconPosition,
  ...rest
}: TextFieldProps) => {
  let inputProps = {};
  let rootProps = {
    label,
    error,
    disabled,
    variant: 'outlined' as 'outlined',
    inputRef,
    helperText,
  };
  let inputLabelProps = {
    variant: 'filled' as 'filled',
  };

  if (error) {
    inputProps = {
      ...inputProps,
      endAdornment: (
        <InputAdornment position="end">
          <EditOutlined />
        </InputAdornment>
      ),
    };
  }

  if (icon) {
    if (iconPosition === 'end' && !error) {
      inputProps = {
        ...inputProps,
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      };
    }
    if (iconPosition === 'start') {
      inputLabelProps = {
        ...inputLabelProps,
        ...{ shrink: false },
      };
      rootProps = {
        ...rootProps,
        ...{
          classes: {
            root: 'icon-start',
          },
        },
      };
      inputProps = {
        ...inputProps,
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      };
    }
  }

  return (
    <Styled.TextFiled
      {...rootProps}
      InputLabelProps={{ ...inputLabelProps }}
      InputProps={{ ...inputProps }}
      {...rest}
    />
  );
};

export default TextField;
