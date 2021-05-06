import React, { useState, useEffect, memo } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { EditOutlined, VisibilityOff, Visibility } from '../../icons';
import masker from 'vanilla-masker';
import {
  InputBaseComponentProps,
  TextFieldProps as MuiTextFieldProps,
  InputLabelProps,
  InputProps,
} from '@material-ui/core';

import * as Styled from './TextField.style';

type InputComponent = React.ElementType<InputBaseComponentProps>;

export type TextFieldProps = {
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  inputComponent?: InputComponent;
  mask?: string;
  errorMessage?: string;
} & MuiTextFieldProps;

export const TextField = ({
  icon,
  iconPosition,
  inputComponent,
  error = false,
  errorMessage,
  mask,
  type,
  helperText,
  ...rest
}: TextFieldProps) => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>(type);
  const [inputHelperText, setInputHelperText] = useState<React.ReactNode>(
    helperText,
  );

  const { InputProps: defaultInputProps } = { ...rest };

  useEffect(() => {
    if (type === 'password') {
      visiblePassword ? setInputType('text') : setInputType('password');
    }
  }, [type, visiblePassword]);

  useEffect(() => {
    if (error && errorMessage) {
      setInputHelperText(errorMessage);
    } else {
      setInputHelperText(helperText);
    }
  }, [errorMessage, helperText, error]);

  const handlePasswordVisibility = () => {
    type === 'password' && setVisiblePassword(!visiblePassword);
  };

  let rootProps: MuiTextFieldProps = {
    error,
    type: inputType,
    helperText: inputHelperText,
    variant: 'outlined',
  };
  let inputLabelProps: InputLabelProps = {
    variant: 'filled',
  };
  let inputProps: InputProps = {
    ...defaultInputProps,
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

  type === 'password' &&
    (inputProps = {
      ...inputProps,
      endAdornment: (
        <Styled.PasswordAdornment
          position="end"
          onClick={handlePasswordVisibility}
        >
          {visiblePassword ? <VisibilityOff /> : <Visibility />}
        </Styled.PasswordAdornment>
      ),
    });

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
      onChange={e => {
        e.target.value = mask
          ? masker.toPattern(e.target.value, mask)
          : e.target.value;
      }}
    />
  );
};

export default memo(TextField);
