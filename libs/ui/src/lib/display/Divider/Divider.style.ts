import styled from '@emotion/styled';

import { pxToRem } from '@guiabolsobr/utils';
import { themeProps } from '@guiabolsobr/ui';

export const Divider = styled.div`
  background-color: #fff;
  color: ${({ theme }: { theme: themeProps }) => theme?.colors?.neutral?.dark};
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;

  span {
    background: #fff;
    display: inline-block;
    padding: 0 ${pxToRem(12)};
    position: relative;
  }

  &:before {
    background-color: ${({ theme }: { theme: themeProps }) =>
      theme.name === 'connect'
        ? theme?.colors?.neutral?.lighter
        : theme?.colors?.neutral?.lightest};
    content: '';
    height: ${pxToRem(1)};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
`;
