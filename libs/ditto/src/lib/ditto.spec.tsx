import React from 'react';
import { render } from '@testing-library/react';

import Ditto from './ditto';

describe(' Ditto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ditto />);
    expect(baseElement).toBeTruthy();
  });
});
