import React from 'react';

import { CardContent } from '../index';

export default {
  title: 'Containers/CardContent',
  component: CardContent,
  decorators: [
    (story: any) => (
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
