import React from 'react';
import { WrapperSelect } from './Select.style';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  default as SelectMui,
  SelectProps as SProps,
} from '@material-ui/core/Select';

import * as S from '../../navigation/DropMenu/DropMenu.style';

export type SelectProps = {
  options: Array<{ label: string | number | React.ReactNode; value: string }>;
  error?: boolean;
  errorMessage?: string;
} & SProps;

export const Select = ({
  options,
  label,
  error,
  errorMessage,
  ...props
}: SelectProps) => {
  return (
    <WrapperSelect error={error}>
      <FormControl variant="filled" error={error}>
        <InputLabel>{label}</InputLabel>
        <SelectMui
          variant="filled"
          label={label}
          MenuProps={{
            disablePortal: true,
          }}
          {...props}
        >
          {options.map(option => (
            <S.MenuItem value={option.value} key={`select-${option.value}`}>
              {option.label}
            </S.MenuItem>
          ))}
        </SelectMui>
        {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    </WrapperSelect>
  );
};
