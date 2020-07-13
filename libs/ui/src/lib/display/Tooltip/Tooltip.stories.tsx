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
