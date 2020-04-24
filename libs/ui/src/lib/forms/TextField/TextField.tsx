import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditOutlined from '@material-ui/icons/EditOutlined';
import { InputBaseComponentProps } from '@material-ui/core';

import * as Styled from './TextField.style';

type InputComponent = React.ElementType<InputBaseComponentProps>;

type ComomProps = {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  inputRef?: React.Ref<any>;
  label: string;
  name?: string;
};

type TextFieldProps = ComomProps & {
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  inputComponent?: InputComponent;
};

type RootProps = ComomProps & {
  classes?: {
    root: string;
  };
  variant: 'outlined';
};

type InputLabelProps = {
  variant: 'filled';
  shrink?: boolean;
};

type InputProps = {
  endAdornment?: React.ReactElement;
  startAdornment?: React.ReactElement;
  inputComponent?: InputComponent;
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
  let rootProps: RootProps = {
    disabled,
    error,
    helperText,
    inputRef,
    label,
    variant: 'outlined',
    name,
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
      {...rootProps}
      InputLabelProps={{ ...inputLabelProps }}
      InputProps={{ ...inputProps }}
      {...rest}
    />
  );
};

export default TextField;
