import React from 'react';

import { DropMenu, DropMenuItem } from './index';

export default {
  title: 'Navigation/DropMenu',
  component: DropMenu,
};

export const ComponentDropMenu = () => {
  return (
    <div
      style={{
        maxWidth: '300px',
        padding: '1em',
        position: 'relative',
      }}
    >
      <DropMenu executeOnClose={() => alert('[MENU] executeOnClose funcion')}>
        <DropMenuItem onClick={() => alert('[ITEM] clicked')}>
          Click to execute a funcion
        </DropMenuItem>
        <DropMenuItem>Some item</DropMenuItem>
        <DropMenuItem>Some item a little bigger</DropMenuItem>
        <DropMenuItem>Another item</DropMenuItem>
        <DropMenuItem>One more item</DropMenuItem>
      </DropMenu>
    </div>
  );
};
