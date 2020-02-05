import React from 'react';
import { shallow } from 'enzyme';
import Text from '.';

describe('Text', () => {
  it('Renders Text Hello', () => {
    const element = shallow(
      <Text component="p" variant="body-1">
        Hello
      </Text>
    );
    expect(element).toMatchSnapshot();
  });
});
