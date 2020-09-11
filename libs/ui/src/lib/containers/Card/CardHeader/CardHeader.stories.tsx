import React from 'react';
import { StoryFn } from '@storybook/addons';
import { Cached, MoreVert } from '@material-ui/icons';

import { CardHeader } from '../index';

export default {
  title: 'Containers/CardHeader',
  component: CardHeader.type,
  decorators: [
    (story: StoryFn) => (
      <div
        style={{
          maxWidth: '387px',
          margin: 'auto',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const base = () => (
  <CardHeader
    title="Overview"
    titleIcon={<MoreVert />}
    overline="Título do card"
    overlineIcon={<Cached />}
  />
);
