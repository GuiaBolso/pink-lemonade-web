import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  const makeSetup = () => {
    const element = (
      <Checkbox label={<span>Lorem Ipsum</span>} name="newsletter" />
    );
    const utils = render(element);
    const input = utils.container.querySelector('input');
    const label = utils.container.querySelector(
      'span.MuiFormControlLabel-label',
    );

    return {
      element,
      input,
      label,
      ...utils,
    };
  };

  const setup = makeSetup();

  it('It should be same value in fired event', () => {
    const { input } = setup;
    fireEvent.change(input, { target: { checked: true } });
    expect(input.checked).toBe(true);
  });

  it('It should be correct label', () => {
    const { label } = setup;
    expect(label.textContent).toBe('Lorem Ipsum');
  });

  it('renders correctly', () => {
    const { element } = setup;
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
