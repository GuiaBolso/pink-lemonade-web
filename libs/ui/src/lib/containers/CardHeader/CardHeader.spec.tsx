import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardHeader } from '.';

describe('<CardHeader />', () => {
  const { container } = render(
    <CardHeader title="Overview" suptitle="Título do card" />,
  );

  it('Should render title', () => {
    expect(
      screen.getByRole('heading', { name: /Overview/i }),
    ).toBeInTheDocument();
  });

  it('should render correctly', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
