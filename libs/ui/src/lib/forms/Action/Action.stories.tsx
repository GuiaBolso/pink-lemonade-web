import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Action, { ActionProps } from './Action';

export default {
  title: 'Forms/Actions',
  component: Action,
} as Meta;

const Template: Story<ActionProps> = args => <Action {...args} />;

export const IconLeading = Template.bind({});

IconLeading.args = {
  label: 'Action Label',
  arrowPosition: 'leading',
};

export const IconTrailing = () => (
  <Action label="Action Label" arrowPosition="trailing" />
);

export const Wide = () => (
  <Action label="Action Label" arrowPosition="trailing" wide />
);
