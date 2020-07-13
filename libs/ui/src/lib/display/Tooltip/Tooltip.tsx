import React from 'react';

import { Text } from '../../display/Text';

import * as S from './Tooltip.style';

type TooltipProps = {
  content: string,
  children: React.ReactElement;
}

const PopperComponent = (props: any) => {
  return <S.Popper {...props} />;
};

const Tooltip = ({ content, children }: TooltipProps) => (
  <S.Tooltip
    arrow
    PopperComponent={PopperComponent}
    title={
      <Text variant="caption">{content}</Text>
    }
  >
    {children}
  </S.Tooltip>
);


export default Tooltip;
