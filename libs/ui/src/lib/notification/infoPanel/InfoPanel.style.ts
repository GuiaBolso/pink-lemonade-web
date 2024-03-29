import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { pxToRem } from '@guiabolsobr/utils';

import { Text } from '../../display/Text';
import { FeedbackType } from './InfoPanel';

type InfoPanelTheme = {
  theme?: Theme;
};

type ContainerProps = InfoPanelTheme & {
  feedbackType: FeedbackType;
};

export const Container = styled.div<ContainerProps>`
  align-items: flex-start;
  background-color: ${({ theme, feedbackType }) =>
    theme?.colors?.feedback[feedbackType]?.lightest};
  border-radius: ${pxToRem(4)};
  box-shadow: 0 0 1px ${({ theme }) => theme?.colors?.neutral?.light};
  display: flex;
  margin: ${pxToRem(20)} 0;
  padding: ${pxToRem(16)};
  word-break: break-word;
`;

export const Image = styled.img`
  display: block;
  margin-right: ${pxToRem(8)};

  @media all and (min-width: 1024px) {
    margin-right: ${pxToRem(16)};
  }
`;

export const Content = styled(Text)<InfoPanelTheme>`
  color: ${({ theme }) => theme?.colors?.neutral?.dark};
`;
