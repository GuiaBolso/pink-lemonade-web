import React from 'react';
import Divider, { DividerProps } from './Divider';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Display/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = args => <Divider {...args} />;

export const withLabel = Template.bind({});

withLabel.args = {
  label: 'ou',
};

//export const withLabel = () => <Divider label="ou" />;
export const withoutLabel = () => <Divider />;
