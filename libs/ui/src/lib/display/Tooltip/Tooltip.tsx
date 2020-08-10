import React from 'react';
import MuiTooltip from '@material-ui/core/Tooltip';

import { Text } from '../Text';

import * as S from './Tooltip.style';

type TooltipProps = {
  content: string | React.ReactNode | React.ReactNode[];
  children: React.ReactElement;
  title?: string | React.ReactNode | React.ReactNode[];
};

const PopperComponent = props => {
  return <S.Popper {...props} />;
};

const Tooltip = ({ title, content, children }: TooltipProps) => (
  <MuiTooltip
    arrow
    enterTouchDelay={1}
    leaveTouchDelay={1}
    interactive
    PopperComponent={PopperComponent}
    title={
      <>
        {title && <S.Title variant="heading-06">{title}</S.Title>}
        <Text variant="subtitle-small">{content}</Text>
      </>
    }
  >
    {children}
  </MuiTooltip>
);

export default Tooltip;
