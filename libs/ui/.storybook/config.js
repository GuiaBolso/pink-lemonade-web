import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Theme } from '../lib/general';

// automatically import all files ending in *.stories.js
const req = require.context('../lib', true, /\.stories\.(mdx|jsx|tsx)$/);

const withGlobal = cb => (
  <Theme>
    {console.log('caiu aqui no global')}
    {cb()}
  </Theme>
);

addDecorator(withKnobs);
addDecorator(withGlobal);
configure(require.context('../lib', true, /\.stories\.tsx?$/), module);
