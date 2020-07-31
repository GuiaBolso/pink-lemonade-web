import React from 'react';
import { StoryFn } from '@storybook/addons';

import { CardFooter } from '../index';
import { Action } from '../../../forms/Action';
import { Button } from '../../../forms/Button';

export default {
  title: 'Containers/CardFooter',
  component: CardFooter,
  decorators: [
    (story: StoryFn) => (
      <div
        style={{
          maxWidth: '328px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const action = () => (
  <CardFooter
    action={
      <Action scale="narrow" label="Action label" arrowPosition="trailing" />
    }
  />
);

export const addendum = () => (
  <CardFooter
    addendum
    description="Você utiliza outro banco? Aproveite para adicionar enquanto carrega a conta acima"
    action={
      <Action scale="narrow" label="Action label" arrowPosition="trailing" />
    }
  />
);

export const button = () => (
  <CardFooter action={<Button label="Action label" scale="wide-thin" />} />
);
