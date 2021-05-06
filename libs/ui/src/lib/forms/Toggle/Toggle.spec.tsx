import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Toggle from './Toggle';

describe('Toggle Component', () => {
  const makeSetup = () => {
    const element = <Toggle label="Lorem Ipsum" name="simple-toggle" />;
    const utils = render(element);
    const input = utils.container.querySelector('input');
    const label = utils.container.querySelector('.MuiFormControlLabel-label');

    return {
      element,
      input,
      label,
      ...utils,
    };
  };

  const setup = makeSetup();

  it('It should NOT to be checked when start', () => {
    const { input } = setup;
    expect(input.checked).toBe(false);
  });

  it('It should BE checked when clicked', () => {
    const { input } = setup;
    fireEvent.change(input, { target: { checked: true } });
    expect(input.checked).toBe(true);
  });

  it('It should be correct label', () => {
    const { label } = setup;
    expect(label.textContent).toBe('Lorem Ipsum');
  });

  it('It should renders correctly', () => {
    const { element } = setup;
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
