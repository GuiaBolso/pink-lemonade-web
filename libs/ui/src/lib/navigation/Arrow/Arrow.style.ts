import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { Text } from '../../display/Text';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type ArrowTheme = {
  theme: CustomThemeProps;
};

type ArrowContainerProps = {
  label: string;
  icon?: React.Component;
};

export const ArrowContainer = styled.div`
  align-items: flex-end;
  display: flex;

  ${({ label }: ArrowContainerProps) => css`
    text-align: ${label === 'Anterior' ? 'left' : 'right'};
  `}
`;

export const Label = styled(Text)`
  color: ${({ theme }: ArrowTheme) => theme?.colors?.neutral?.darker};
  display: block;
`;

export const Content = styled(Text)`
  color: ${({ theme }: ArrowTheme) => theme?.colors?.neutral?.darkest};
  display: block;
  min-height: 24px;
`;

export const VerticalSpace = styled.div`
  margin-top: ${pxToRem(12)};
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  width: ${pxToRem(24)};

  /* stylelint-disable-next-line */
  ${({ label }: ArrowContainerProps) => {
    return label === 'Anterior'
      ? css`
          margin-right: ${pxToRem(12)};
          order: -1;
        `
      : css`
          margin-left: ${pxToRem(12)};
          transform: rotate(-180deg);
        `;
  }}

  svg path {
    fill: ${({ theme }: ArrowTheme) => theme?.colors?.brand?.tertiary?.default};
  }
`;
