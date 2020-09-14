import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HelpOutline from '@material-ui/icons/HelpOutline';

import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'Display/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <HelpOutline />
  </Tooltip>
);

export const DefaultTooltip = Template.bind({});

DefaultTooltip.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem fugiat.',
};

export const TooltipWithTitle = () => (
  <Tooltip
    title="Lorem ipsum dolor sit"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem fugiat."
  >
    <HelpOutline />
  </Tooltip>
);

export const TooltipWithContentBold = () => (
  <Tooltip
    title="Lorem ipsum dolor sit"
    content={
      <p>
        <b>Lorem: </b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem
        fugiat.
      </p>
    }
  >
    <HelpOutline />
  </Tooltip>
);
