import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Arrow, { ArrowProps } from './Arrow';

export default {
  title: 'Navigation/Arrow',
  component: Arrow,
} as Meta;

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

const Template: Story<ArrowProps> = args => <Arrow {...args} />;

export const Prev = Template.bind({});

Prev.args = {
  label: 'Anterior',
  content: 'Token',
};

export const Next = () => <Arrow label="Próximo" content="Token" />;

export const PrevAndNext = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Arrow label="Anterior" content="Token" />

    <Arrow label="Próximo" content="Token" />
  </div>
);

export const PrevAndNextCustomIcon = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Arrow label="Anterior" content="Token" icon={<IconMock />} />

    <Arrow label="Próximo" content="Token" icon={<IconMock />} />
  </div>
);
