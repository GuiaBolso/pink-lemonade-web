import React from 'react';

import { Button } from './index';
import { guiaBolso } from '../../../designSystem/tokens';

export default {
  title: 'Forms/Buttons',
  component: Button,
};

export const Primary = () => <Button label="Primary" appearance="primary" />;

export const Secondary = () => (
  <Button label="Secondary" appearance="secondary" />
);

export const Tertiary = () => <Button label="Tertiary" appearance="tertiary" />;

export const Disabled = () => (
  <Button label="Disabled" appearance="primary" disabled />
);

export const Fixed = () => (
  <Button label="Fixed" appearance="primary" scale="fixed" />
);

export const Thin = () => (
  <Button label="Thin" appearance="primary" scale="wide-thin" />
);

export const Narrow = () => (
  <Button label="Narrow" appearance="primary" scale="narrow" />
);

export const CustomColor = () => (
  <Button
    label="Custom Color"
    customColor={{
      base: guiaBolso.colors.brand.primary.default,
      hover: guiaBolso.colors.brand.primary.light,
      active: guiaBolso.colors.brand.primary.dark,
    }}
  />
);
