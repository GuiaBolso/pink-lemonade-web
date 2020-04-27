import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
};

export const simple = () => (
  <Checkbox label={<span>Receber newsletter</span>} name="newsletter" />
);

export const standAlone = () => (
  <Checkbox
    label={<span>Receber newsletter</span>}
    variant="stand-alone"
    name="newsletter"
  />
);

export const checked = () => (
  <Checkbox
    defaultChecked
    label={<span>Receber newsletter</span>}
    name="newsletter"
  />
);

export const disabled = () => (
  <Checkbox
    label={<span>Receber newsletter</span>}
    checked
    disabled
    name="newsletter"
  />
);
