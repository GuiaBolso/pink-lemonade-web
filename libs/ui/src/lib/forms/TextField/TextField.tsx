import React, { useState, useEffect, useRef, memo } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  EditOutlined,
  VisibilityOff,
  Visibility,
  Search,
} from '@material-ui/icons';
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
  const [visiblePassword, setVisiblePassword] = useState<true | false>(false);
  const [inputType, setInputType] = useState<string>(type);
  const [filledInput, setFilledInput] = useState<string>('');
  const [inputHelperText, setInputHelperText] = useState<React.ReactNode>(
    helperText,
  );

  let textFieldRef = useRef<any>(null);

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

  const clearSearchInput = () => {
    setFilledInput('');
    textFieldRef.current.value = '';
    textFieldRef.current.focus();
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
          {visiblePassword ? <Visibility /> : <VisibilityOff />}
        </Styled.PasswordAdornment>
      ),
    });

  type === 'search' &&
    (inputProps = {
      ...inputProps,
      endAdornment: (
        <Styled.SearchAdornment position="end">
          {!filledInput ? (
            <Search />
          ) : (
            <Styled.ClearSearch onClick={clearSearchInput} />
          )}
        </Styled.SearchAdornment>
      ),
      onChange: e => setFilledInput(e.target.value),
      inputRef: textFieldRef,
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
