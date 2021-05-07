import React from 'react';
import { Select as S } from './Select';

export default {
  title: 'Forms/Select',
  component: S,
};

const options = [
  {
    label: 'lorem 1',
    value: '1',
  },
  {
    label: 'lorem 2',
    value: '2',
  },
];

export const Select = () => <S options={options} label="Isto é uma label" />;

export const error = () => (
  <S options={options} label="Isto é uma label" error errorMessage="Error" />
);
