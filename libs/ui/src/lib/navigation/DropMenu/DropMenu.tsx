import React from 'react';

import * as S from './DropMenu.style';

type DropMenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

type DropMenuProps = {
  children: React.ReactNode;
  executeOnClose: () => void;
};

const DropMenuItem = ({ children, onClick }: DropMenuItemProps) => (
  <S.MenuItem onClick={onClick}>{children}</S.MenuItem>
);

const DropMenu = ({ children, executeOnClose }: DropMenuProps) => {
  return (
    <>
      <S.Menu>{children}</S.Menu>
      <S.MenuMask onClick={executeOnClose} />
    </>
  );
};

export { DropMenu, DropMenuItem };
