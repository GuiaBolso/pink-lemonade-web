import React from 'react';
import { TextField } from '.';

export default { title: 'Forms/TextField', component: TextField };

export const base = () => <TextField label="Nome" />;

export const error = () => <TextField label="Nome" error />;

export const disabled = () => <TextField label="Nome" disabled />;
