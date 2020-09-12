import React from 'react';
import { Text } from '@guiabolsobr/ui';
import * as S from './Divider.style';

export type DividerProps = React.ComponentProps<'div'> & {
  label?: string;
};

const Divider = ({ label, ...rest }: DividerProps) => {
  return (
    <S.Divider {...rest}>
      {label && <Text variant="overline-small">{label}</Text>}
    </S.Divider>
  );
};

export default Divider;
