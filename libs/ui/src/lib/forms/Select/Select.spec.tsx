import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Select } from './Select.stories';

describe('Select Component', () => {
  it('Snapshot', () => {
    expect(renderer.create(<Select />).toJSON()).toMatchSnapshot();
  });
});
