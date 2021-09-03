import React from 'react';

import { Text } from '../../display/Text';

import * as S from './DropMenu.style';

type DropMenuItemProps = React.ComponentProps<'li'>;

type DropMenuProps = React.ComponentProps<'ul'> & {
  executeOnClose: () => void;
};

const DropMenuItem = ({ children, ...rest }: DropMenuItemProps) => (
  <S.MenuItem {...rest}>
    <Text component="div" variant="body-small">
      {children}
    </Text>
  </S.MenuItem>
);

const DropMenu = ({ children, executeOnClose, ...rest }: DropMenuProps) => {
  return (
    <>
      <S.Menu {...rest}>{children}</S.Menu>
      <S.MenuMask
        role="presentation"
        aria-label="Drop Menu Backdrop"
        onClick={executeOnClose}
      />
    </>
  );
};

export { DropMenu, DropMenuItem };
