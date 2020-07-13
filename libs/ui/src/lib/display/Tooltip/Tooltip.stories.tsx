import React from 'react';
import HelpOutline from '@material-ui/icons/HelpOutline';

import { Tooltip } from './index';

export default {
  title: 'Display/Tooltip',
  component: Tooltip,
};

export const DefaultTooltip = () => (
  <Tooltip content="É um aplicativo instalado no seu aparelho celular que gera senhas aleatórias com 6 números.">
    <HelpOutline />
  </Tooltip>
);
