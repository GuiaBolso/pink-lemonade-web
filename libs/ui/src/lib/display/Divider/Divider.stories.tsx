import React from 'react';
import Divider from './Divider';

export default {
  title: 'Display/Divider',
  component: Divider,
};

export const withLabel = () => <Divider label="ou" />;
export const withoutLabel = () => <Divider />;
