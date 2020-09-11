import React from 'react';
import { StoryFn } from '@storybook/addons';
import { Story, Meta } from '@storybook/react/types-6-0';

import CardFooter, { CardFooterProps } from './CardFooter';
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
} as Meta;

const Template: Story<CardFooterProps> = args => <CardFooter {...args} />;

export const addendum = Template.bind({});

addendum.args = {
  addendum: true,
  description:
    'Você utiliza outro banco? Aproveite para adicionar enquanto carrega a conta acima',
  action: (
    <Action scale="narrow" label="Action label" arrowPosition="trailing" />
  ),
};

export const action = () => (
  <CardFooter
    action={
      <Action scale="narrow" label="Action label" arrowPosition="trailing" />
    }
  />
);

export const button = () => (
  <CardFooter action={<Button label="Action label" scale="wide-thin" />} />
);
