import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditOutlined from '@material-ui/icons/EditOutlined';

import * as Styled from './TextField.style';

type TextFieldProps = {
  label: string;
  error?: boolean;
  disabled?: boolean;
};

export const TextField = ({
  label,
  error = false,
  disabled = false,
}: TextFieldProps) => {
  let inputProps = {};

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

  return (
    <Styled.TextFiled
      label={label}
      error={error}
      disabled={disabled}
      variant="outlined"
      InputProps={{ ...inputProps }}
    />
  );
};

export default TextField;
