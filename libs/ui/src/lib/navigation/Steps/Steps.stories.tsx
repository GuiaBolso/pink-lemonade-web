import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Steps, { StepsProps } from './Steps';

export default {
  title: 'Navigation/Steps',
  component: Steps.type,
} as Meta;

const Template: Story<StepsProps> = args => <Steps {...args} />;

export const ComponentSteps = Template.bind({});

ComponentSteps.args = {
  totalSteps: 5,
  currentStep: 2,
};
