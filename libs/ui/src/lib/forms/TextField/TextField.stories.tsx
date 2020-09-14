import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import TextField, { TextFieldProps } from './TextField';

export default { title: 'Forms/TextField', component: TextField.type } as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const base = Template.bind({});

base.args = {
  label: 'Nome',
};

export const helperText = () => (
  <TextField label="Nome" helperText="Digite o seu nome!" />
);

export const iconTrailing = () => (
  <TextField label="Nome" icon={<AlternateEmail />} iconPosition="start" />
);

export const iconLading = () => (
  <TextField label="Nome" icon={<AlternateEmail />} iconPosition="end" />
);

export const error = () => (
  <TextField
    label="Nome"
    error
    helperText="insira seu nome completo"
    errorMessage="campo inválido"
  />
);

export const password = () => <TextField label="Senha" type="password" />;

export const masked = () => <TextField label="CPF" mask="999.999.999-99" />;

export const disabled = () => <TextField label="Nome" disabled />;

export const search = () => <TextField label="Busca" type="search" />;
