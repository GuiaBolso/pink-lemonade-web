import styled from '@emotion/styled';
import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

import { Text } from '../../display/Text';

type CardProps = {
  variant?: string;
  theme: CustomThemeProps;
};

const variants = {
  default: ({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  outlined: ({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        border: 1px solid ${theme?.colors?.neutral?.light};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },
};

export const Card = styled.article`
  background: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  flex: 1 1 ${pxToRem(235)};
  margin: ${pxToRem(12)};

  ${({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        box-shadow: 0 4px 4px rgba(13, 13, 13, 0.14),
          0 0 2px rgba(13, 13, 13, 0.2);
      `,
      guiaBolso: () => css`
        box-shadow: 0px 0.5px 1px #d9d9d9;
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  }};

  /* stylelint-disable-next-line */
  ${props => variants[props.variant]}
`;

export const CardHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: ${pxToRem(16)} ${pxToRem(16)} 0;

  &:last-child {
    padding-bottom: ${pxToRem(16)};
  }
`;

export const CardTitle = styled(Text)`
  color: ${({ theme }: CardProps) => theme?.colors?.neutral?.dark};
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  ${({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        color: ${theme?.colors?.neutral?.darkest};
      `,
      guiaBolso: () => css`
        color: ${theme?.colors?.neutral?.dark};
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  }};

  padding: 0 ${pxToRem(16)} ${pxToRem(16)};
`;

export const Spacer = styled.hr`
  border: 0;
  height: ${pxToRem(9)};

  ${({ theme }: CardProps) => {
    const themeName = {
      connect: () => css`
        border-top: 1px solid ${theme?.colors?.neutral?.lighter};
        margin: ${pxToRem(16)} 0;
      `,
      guiaBolso: () => null,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  }};
`;

export const IconContainer = styled.div`
  align-items: flex-start;
  color: ${({ theme }: CardProps) => theme?.colors?.brand?.secondary?.default};
  display: flex;
  height: ${pxToRem(20)};
  justify-content: center;
  margin-left: ${pxToRem(8)};
  width: ${pxToRem(20)};
`;

export const OverlineText = styled(Text)`
  color: ${({ theme }: CardProps) => theme?.colors?.neutral?.dark};
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  margin-bottom: ${pxToRem(8)};
`;
