import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TextField } from './index';

describe('TextField Component', () => {
  const makeSetup = () => {
    const element = (
      <TextField label="Lorem Ipsum" helperText="Lorem ipsum dolor sit amet." />
    );
    const utils = render(element);
    const input = utils.container.querySelector('input');
    const label = utils.container.querySelector('label.MuiFormLabel-root');
    const helperText = utils.container.querySelector(
      'p.MuiFormHelperText-root',
    );

    return {
      element,
      input,
      label,
      helperText,
      ...utils,
    };
  };

  const setup = makeSetup();

  it('It should be same value in front of the input', () => {
    const { input } = setup;
    fireEvent.change(input, { target: { value: 'Lorem ipsum dolor' } });
    expect(input.value).toBe('Lorem ipsum dolor');
  });

  it('It should be correct label', () => {
    const { label } = setup;
    expect(label.textContent).toBe('Lorem Ipsum');
  });

  it('It should be correct helper text', () => {
    const { helperText } = setup;
    expect(helperText.textContent).toBe('Lorem ipsum dolor sit amet.');
  });

  it('renders correctly', () => {
    const { element } = setup;
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
