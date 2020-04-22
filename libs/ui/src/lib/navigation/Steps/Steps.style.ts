import styled from '@emotion/styled';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type StepsTheme = {
  active?: boolean;
  theme: CustomThemeProps;
};

export const StepsContainer = styled.ol`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Step = styled.li`
  background-color: ${({ active, theme }: StepsTheme) =>
    active
      ? theme?.colors?.brand?.secondary?.default
      : theme?.colors?.neutral?.brand};
  border-radius: 50%;
  color: transparent;
  display: block;
  font-size: 1px;
  height: 12px;
  margin: 6px;
  width: 12px;
`;
