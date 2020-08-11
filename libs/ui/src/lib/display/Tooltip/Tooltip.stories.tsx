import React from 'react';
import HelpOutline from '@material-ui/icons/HelpOutline';

import { Tooltip } from './index';

export default {
  title: 'Display/Tooltip',
  component: Tooltip,
};

export const DefaultTooltip = () => (
  <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem fugiat.">
    <HelpOutline />
  </Tooltip>
);

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
