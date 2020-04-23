import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditOutlined from '@material-ui/icons/EditOutlined';

import * as Styled from './TextField.style';

type TextFieldProps = {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  inputComponent?: any;
  inputRef?: React.RefObject<HTMLInputElement>;
  label: string;
  name?: string;
};

export const TextField = ({
  disabled = false,
  error = false,
  helperText,
  icon,
  iconPosition,
  inputComponent,
  inputRef,
  label,
  name,
  ...rest
}: TextFieldProps) => {
  let rootProps = {
    disabled,
    error,
    helperText,
    inputRef,
    label,
    variant: 'outlined' as 'outlined',
    name,
  };
  let inputLabelProps = {
    variant: 'filled' as 'filled',
  };
  let inputProps = {
    inputComponent,
  };

  if (error) {
    inputProps = {
      ...inputProps,
      ...{
        endAdornment: (
          <InputAdornment position="end">
            <EditOutlined />
          </InputAdornment>
        ),
      },
    };
  }

  if (icon) {
    if (iconPosition === 'end' && !error) {
      inputProps = {
        ...inputProps,
        ...{
          endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
        },
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
        ...{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        },
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
