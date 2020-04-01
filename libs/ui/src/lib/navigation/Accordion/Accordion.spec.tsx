import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Theme } from '../../general';
import { connect, guiaBolso } from '../../../designSystem/tokens';
import { Accordion } from '.';

describe('Text Component', () => {
  const AccordionContent = () => (
    <Theme theme={guiaBolso}>
      <Accordion initOpened summary={<span>Lorem Ipsum</span>}>
        <span data-testid="text-accordion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          commodo.
        </span>
      </Accordion>
    </Theme>
  );

  const AccordionContentConnect = () => (
    <Theme theme={connect}>
      <Accordion initOpened summary={<span>Lorem Ipsum</span>}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          commodo.
        </span>
      </Accordion>
    </Theme>
  );

  it('renders correctly', () => {
    const tree = renderer.create(<AccordionContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders connect theme correctly', () => {
    const tree = renderer.create(<AccordionContentConnect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
