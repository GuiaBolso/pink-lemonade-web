import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DittoProps {}

const StyledDitto = styled.div`
  color: pink;
`;

export const Ditto = (props: DittoProps) => {
  return (
    <StyledDitto>
      <h1>Welcome to ditto component!</h1>
    </StyledDitto>
  );
};

export default Ditto;
