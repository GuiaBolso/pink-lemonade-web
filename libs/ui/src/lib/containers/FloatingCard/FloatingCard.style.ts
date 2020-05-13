import styled from '@emotion/styled';

// eslint-disable-next-line import/no-unresolved
import { pxToRem } from '@guiabolsobr/utils';
import { Text } from '../../display/Text';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type FloatingCardTheme = {
  theme: CustomThemeProps;
};

export const FloatingCard = styled.article`
  background: #fff;
  border-radius: ${pxToRem(4)};
  flex: 1;
  margin: 0 ${pxToRem(2)};
  padding: ${pxToRem(16)} ${pxToRem(20)} ${pxToRem(24)} ${pxToRem(20)};
  transition: box-shadow 0.2s, transform 0.3s;

  &:hover {
    box-shadow: 0px 8px 8px #d9d9d9;
    transform: translateY(-5px);
  }

  &:empty {
    display: none;
  }

  @media all and (max-width: 768.5px) {
    & + article {
      margin-top: ${pxToRem(10)};
    }
  }
`;

export const Category = styled(Text)`
  color: ${({ theme }: FloatingCardTheme) =>
    theme?.colors?.brand?.secondary?.default};
  text-transform: uppercase;
`;

export const Title = styled(Text)`
  margin: ${pxToRem(16)} 0;
`;

export const Description = styled(Text)`
  color: ${({ theme }: FloatingCardTheme) => theme?.colors?.neutral?.darker};
  margin: ${pxToRem(8)} 0;
`;
