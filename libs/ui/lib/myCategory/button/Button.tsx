import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.div`
  color: pink;
`;

export const Button = (props: ButtonProps) => (
  <StyledButton>
    <h1>Welcome to Button component!</h1>
  </StyledButton>
);
