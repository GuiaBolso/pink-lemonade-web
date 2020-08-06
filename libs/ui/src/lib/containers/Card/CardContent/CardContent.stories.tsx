import React from 'react';
import { StoryFn } from '@storybook/addons';
import { Text } from '@guiabolsobr/ui';

import { CardContent } from '../index';

export default {
  title: 'Containers/CardContent',
  component: CardContent,
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

export const Base = () => (
  <CardContent>
    Texto secundário do card que pode conter ate 2 linhas.
  </CardContent>
);

export const Custom = () => (
  <CardContent>
    <Text variant="display-01" component="div">
      Texto secundário
    </Text>
  </CardContent>
);
