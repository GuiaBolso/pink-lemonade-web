import React from 'react';
import { TextField } from '.';
import { Theme } from '../../general';
import { guiaBolso } from '../../../designSystem/tokens';

export default { title: 'Forms/TextField/GuiaBolso' };

export const base = () => (
  <Theme theme={guiaBolso}>
    <TextField label="Nome" />
  </Theme>
);

export const error = () => (
  <Theme theme={guiaBolso}>
    <TextField label="Nome" error />
  </Theme>
);

export const disabled = () => (
  <Theme theme={guiaBolso}>
    <TextField label="Nome" disabled />
  </Theme>
);
