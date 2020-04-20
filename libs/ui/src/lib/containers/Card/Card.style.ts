import styled from '@emotion/styled';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

import { Text } from '../../display/Text';

type CardTheme = {
  theme: CustomThemeProps;
};

export const Card = styled.article`
  background: #fff;
  border: 1px solid ${({ theme }: CardTheme) => theme?.colors?.neutral?.light};
  border-radius: 6px;
  box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  flex: 1 1 235px;
  margin: 12px;
  padding: 24px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  color: ${({ theme }: CardTheme) => theme?.colors?.neutral?.dark};
`;

export const Spacer = styled.div`
  height: 9px;
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-left: 8px;
  width: 40px;
`;
