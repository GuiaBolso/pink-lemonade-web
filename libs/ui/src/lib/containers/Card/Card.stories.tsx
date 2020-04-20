import React from 'react';
import { Card } from './index';

const MockIcon = () => (
  <div
    style={{
      alignItems: 'center',
      background: '#d0d',
      color: '#fff',
      display: 'flex',
      height: '40px',
      justifyContent: 'center',
      width: '40px',
    }}
  >
    <span>Hello</span>
  </div>
);

export default {
  title: 'Containers/Card',
  component: Card,
  decorators: [
    /* eslint-disable-next-line */
    (story: any) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '250px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Complete = () => (
  <Card
    title="Análise completa"
    icon={<MockIcon />}
    content="Nossa tecnologia realiza a leitura do extrato da sua conta corrente e entende seus hábitos e o momento financeiro para ajudar o Parceiro a encontrar a melhor oferta para você."
  />
);

export const NoIcon = () => (
  <Card
    title="Análise completa"
    content="Nossa tecnologia realiza a leitura do extrato da sua conta corrente e entende seus hábitos e o momento financeiro para ajudar o Parceiro a encontrar a melhor oferta para você."
  />
);

export const TitleOnly = () => <Card title="Análise completa" />;

export const ContentOnly = () => (
  <Card content="Nossa tecnologia realiza a leitura do extrato da sua conta corrente e entende seus hábitos e o momento financeiro para ajudar o Parceiro a encontrar a melhor oferta para você." />
);
