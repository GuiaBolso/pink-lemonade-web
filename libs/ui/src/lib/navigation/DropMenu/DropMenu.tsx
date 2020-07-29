import React from 'react';

import { Text } from '../../display/Text';

import * as S from './DropMenu.style';

type DropMenuItemProps = React.ComponentProps<'li'>;

type DropMenuProps = React.ComponentProps<'ul'> & {
  executeOnClose: () => void;
};

const DropMenuItem = ({ children, ...rest }: DropMenuItemProps) => (
  <S.MenuItem {...rest}>
    <Text component="div" variant="body-01">
      {children}
    </Text>
  </S.MenuItem>
);

const DropMenu = ({ children, executeOnClose, ...rest }: DropMenuProps) => {
  return (
    <>
      <S.Menu {...rest}>{children}</S.Menu>
      <S.MenuMask onClick={executeOnClose} />
    </>
  );
};

export { DropMenu, DropMenuItem };
