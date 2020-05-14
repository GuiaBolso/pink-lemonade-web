import React from 'react';

import { Arrow } from './index';

export default {
  title: 'Navigation/Arrow',
  component: Arrow,
};

const IconMock = () => (
  <div
    style={{
      alignItems: 'center',
      background: '#d0d',
      color: '#fff',
      display: 'flex',
      fontSize: '12px',
      height: '24px',
      justifyContent: 'center',
      width: '24px',
    }}
  >
    <span>ico</span>
  </div>
);

export const Prev = () => <Arrow label="Anterior" index={1} content="Token" />;

export const Next = () => <Arrow label="Próximo" index={1} content="Token" />;

export const PrevAndNext = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Arrow label="Anterior" index={1} content="Token" />

    <Arrow label="Próximo" index={1} content="Token" />
  </div>
);

export const PrevAndNextCustomIcon = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Arrow label="Anterior" index={1} content="Token" icon={<IconMock />} />

    <Arrow label="Próximo" index={1} content="Token" icon={<IconMock />} />
  </div>
);
