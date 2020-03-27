import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Theme } from '../../general';
import { Text } from '.';

describe('Text Component', () => {
  const TextDisplay01 = () => (
    <Theme>
      <Text variant="display-01">Componente de texto</Text>
    </Theme>
  );

  const TextDisplay01Connect = () => (
    <Theme theme="connect">
      <Text variant="display-01">Componente de texto</Text>
    </Theme>
  );

  const Texth1 = () => (
    <Theme>
      <Text component="h1">Componente h1</Text>
    </Theme>
  );

  it('renders correctly', () => {
    const tree = renderer.create(<TextDisplay01 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders connect theme correctly', () => {
    const tree = renderer.create(<TextDisplay01Connect />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays the correct text', () => {
    const { getByTestId } = render(<TextDisplay01 />);

    expect(getByTestId('text')).toHaveTextContent(/^Componente de texto$/);
  });

  it('Displays h1 component', () => {
    const { getByTestId } = render(<Texth1 />);

    expect(getByTestId('text')).toContainHTML('h1');
  });
});
