import React, { memo } from 'react';

import * as S from './DropMenu.style';

const DropMenu: React.FC = () => {
  const handleMenu = () => {
    console.log('Fechar o menu');
  };

  return (
    <>
      <S.Menu>
        <S.MenuItem>Lorem</S.MenuItem>
      </S.Menu>
      <S.MenuMask onClick={handleMenu} />
    </>
  );
};

export default memo(DropMenu);
