import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditOutlined from '@material-ui/icons/EditOutlined';
import {
  InputBaseComponentProps,
  TextFieldProps as MuiTextFieldProps,
  InputLabelProps,
  InputProps,
} from '@material-ui/core';

import * as Styled from './TextField.style';

type InputComponent = React.ElementType<InputBaseComponentProps>;

type TextFieldProps = {
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  inputComponent?: InputComponent;
  teste?: 'teste1' | 'teste2' | 'teste3';
} & MuiTextFieldProps;

export const TextField = ({
  icon,
  iconPosition,
  inputComponent,
  error = false,
  ...rest
}: TextFieldProps) => {
  let rootProps: MuiTextFieldProps = {
    error,
    variant: 'outlined',
  };
  let inputLabelProps: InputLabelProps = {
    variant: 'filled',
  };
  let inputProps: InputProps = {
    inputComponent,
  };

  const setIconPosition = () => {
    const positions = {
      start: () => {
        inputLabelProps = {
          ...inputLabelProps,
          shrink: false,
        };
        rootProps = {
          ...rootProps,
          classes: {
            root: 'icon-start',
          },
        };
        inputProps = {
          ...inputProps,
          startAdornment: (
            <InputAdornment position={iconPosition}>{icon}</InputAdornment>
          ),
        };
      },
      end: () => {
        !error &&
          (inputProps = {
            ...inputProps,
            endAdornment: (
              <InputAdornment position={iconPosition}>{icon}</InputAdornment>
            ),
          });
      },
    };
    return (positions[iconPosition] || positions.start)();
  };

  error &&
    (inputProps = {
      ...inputProps,
      endAdornment: (
        <InputAdornment position="end">
          <EditOutlined />
        </InputAdornment>
      ),
    });

  icon && setIconPosition();

  return (
    <Styled.TextFiled
      {...rest}
      {...rootProps}
      InputLabelProps={{ ...inputLabelProps }}
      InputProps={{ ...inputProps }}
    />
  );
};

export default TextField;
