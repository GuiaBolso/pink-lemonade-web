import React from 'react';
import { TextField } from '.';
import { Theme } from '../../general';
import { connect } from '../../../designSystem/tokens';

export default { title: 'Forms/TextField/Connect' };

export const base = () => (
  <Theme theme={connect}>
    <TextField label="Nome" />
  </Theme>
);

export const error = () => (
  <Theme theme="connect">
    <TextField label="Nome" error />
  </Theme>
);

export const disabled = () => (
  <Theme theme="connect">
    <TextField label="Nome" disabled />
  </Theme>
);
