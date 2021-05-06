import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'Forms/Toggle',
  component: Toggle.type,
};

export const simple = () => <Toggle name="newsletter" label="Simple" />;

export const checked = () => (
  <Toggle defaultChecked label="Checked" name="newsletter" />
);

export const disabled = () => (
  <Toggle label="Disabled" checked disabled name="newsletter" />
);
