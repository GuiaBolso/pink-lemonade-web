import React, { useState, useEffect, memo } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { EditOutlined, VisibilityOff, Visibility } from '@material-ui/icons';
import masker from 'vanilla-masker';
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
  mask?: string;
} & MuiTextFieldProps;

export const TextField = ({
  icon,
  iconPosition,
  inputComponent,
  error = false,
  mask,
  type,
  ...rest
}: TextFieldProps) => {
  const [visiblePassword, setVisiblePassword] = useState<true | false>(false);
  const [inputType, setInputType] = useState<string>(type);
  const [inputError, setInputError] = useState<true | false>(error);

  useEffect(() => {
    if (type === 'password') {
      visiblePassword ? setInputType('text') : setInputType('password');
    }
  }, [type, visiblePassword]);

  const handlePasswordVisibility = () => {
    type === 'password' && setVisiblePassword(!visiblePassword);
  };

  let rootProps: MuiTextFieldProps = {
    error: inputError,
    type: inputType,
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
        !inputError &&
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
          {visiblePassword ? <Visibility /> : <VisibilityOff />}
        </Styled.PasswordAdornment>
      ),
    });

  inputError &&
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
      onFocus={() => setInputError(false)}
    />
  );
};

export default memo(TextField);
