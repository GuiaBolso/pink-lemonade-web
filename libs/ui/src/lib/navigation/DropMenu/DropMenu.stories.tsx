import React from 'react';

import { DropMenu } from './index';

export default {
  title: 'Navigation/DropMenu',
  component: DropMenu,
};

export const ComponentDropMenu = () => (
  <div
    style={{
      maxWidth: '300px',
      position: 'relative',
    }}
  >
    <DropMenu />
  </div>
);
