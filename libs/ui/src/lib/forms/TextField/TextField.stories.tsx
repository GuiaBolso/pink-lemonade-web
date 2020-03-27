import React from 'react';
import { TextField } from '.';
import { Theme } from '../../general';

export default { title: 'Forms/TextField/GuiaBolso' };

export const base = () => (
  <Theme>
    <TextField label="Nome" />
  </Theme>
);

export const error = () => (
  <Theme>
    <TextField label="Nome" error />
  </Theme>
);

export const disabled = () => (
  <Theme>
    <TextField label="Nome" disabled />
  </Theme>
);
