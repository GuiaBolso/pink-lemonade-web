import React from 'react';
import MuiTooltip from '@material-ui/core/Tooltip';

import { Text } from '../Text';

import * as S from './Tooltip.style';

type TooltipProps = {
  content: string;
  children: React.ReactElement;
};

const PopperComponent = props => {
  return <S.Popper {...props} />;
};

const Tooltip = ({ content, children }: TooltipProps) => (
  <MuiTooltip
    arrow
    PopperComponent={PopperComponent}
    title={<Text variant="caption">{content}</Text>}
  >
    {children}
  </MuiTooltip>
);

export default Tooltip;
