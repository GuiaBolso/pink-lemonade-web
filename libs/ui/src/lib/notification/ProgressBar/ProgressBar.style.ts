import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { pxToRem } from '@guiabolsobr/utils';

type LineProps = {
  lineColor?: string;
  theme?: Theme;
};

type SublineProps = {
  animation?: 'dec' | 'inc';
  value?: number;
  sublineColor?: string;
  theme?: Theme;
};

const animations = css`
  @keyframes increase {
    from {
      left: -5%;
      width: 5%;
    }

    to {
      left: 130%;
      width: 100%;
    }
  }

  @keyframes decrease {
    from {
      left: -80%;
      width: 80%;
    }

    to {
      left: 110%;
      width: 10%;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Line = styled.div`
  background-color: ${({ theme, lineColor }: LineProps) =>
    lineColor ? lineColor : theme?.colors?.brand?.primary?.lightest};
  border-radius: ${pxToRem(8)};
  height: ${pxToRem(8)};
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Subline = styled.div`
  background-color: ${({ theme, sublineColor }: SublineProps) =>
    sublineColor ? sublineColor : theme?.colors?.brand?.primary?.lighter};
  height: ${pxToRem(8)};
  ${animations};

  ${({ animation, value }: SublineProps) => {
    if (!value && animation === 'inc') {
      return css`
        animation: increase 2s infinite;
      `;
    }

    if (!value && animation === 'dec') {
      return css`
        animation: decrease 2s 0.5s infinite;
      `;
    }

    return css`
      width: ${value}%;
    `;
  }}

  position: absolute;
  transition: width 0.1s ease;
`;

export const Info = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme?.colors?.neutral?.dark};
  display: flex;
  justify-content: space-between;
  margin-top: ${pxToRem(8)};
`;

export const IconImg = styled.img`
  margin-right: ${pxToRem(5)};
`;
