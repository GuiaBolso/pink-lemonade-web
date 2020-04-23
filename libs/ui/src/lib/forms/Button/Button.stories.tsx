import React from 'react';

import { Button } from './index';

export default {
  title: 'Forms/Buttons',
  component: Button,
};

export const Primary = () => <Button label="Primary" variant="contained" />;

export const Secondary = () => <Button label="Secondary" variant="outlined" />;

export const Tertiary = () => <Button label="Tertiary" variant="text" />;

export const Disabled = () => (
  <Button label="Disabled" variant="contained" disabled />
);

export const WideFixed = () => (
  <Button label="Wide Fixed" variant="contained" fullWidth />
);

export const Thin = () => (
  <Button label="Thin" variant="contained" size="small" />
);
