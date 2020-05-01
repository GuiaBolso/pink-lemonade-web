import React from 'react';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import { TextField } from '.';

export default { title: 'Forms/TextField', component: TextField };

export const base = () => <TextField label="Nome" />;

export const helperText = () => (
  <TextField label="Nome" helperText="Digite o seu nome!" />
);

export const iconTrailling = () => (
  <TextField label="Nome" icon={<AlternateEmail />} iconPosition="start" />
);

export const iconLading = () => (
  <TextField label="Nome" icon={<AlternateEmail />} iconPosition="end" />
);

export const error = () => (
  <TextField label="Nome" error helperText="Digite o campo corretamente" />
);

export const masked = () => <TextField label="CPF" mask="999.999.999-99" />;

export const disabled = () => <TextField label="Nome" disabled />;
