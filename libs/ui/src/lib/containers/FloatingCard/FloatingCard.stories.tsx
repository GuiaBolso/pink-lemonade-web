import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FloatingCard, { FloatingCardProps } from './FloatingCard';

export default {
  title: 'Containers/FloatingCard',
  component: FloatingCard,
} as Meta;

const Template: Story<FloatingCardProps> = args => (
  <div
    style={{
      display: 'flex',
      maxWidth: '300px',
    }}
  >
    <FloatingCard {...args} />
  </div>
);

export const SingleCard = Template.bind({});

SingleCard.args = {
  category: 'Overview',
  title: 'Sobre as tecnologias utilizadas',
  description:
    'O Guiabolso Connect utiliza um protocolo de autenticação chamado...',
};

export const MultipleCards = () => (
  <div
    style={{
      display: 'flex',
      maxWidth: '1200px',
    }}
  >
    <FloatingCard
      category="Overview"
      title="Sobre as tecnologias utilizadas"
      description="O Guiabolso Connect utiliza um protocolo de autenticação chamado..."
    />
    <FloatingCard
      category="Overview"
      title="Sobre"
      description="O Guiabolso Connect utiliza um protocolo de autenticação chamado..."
    />
    <FloatingCard
      category="Overview"
      title="Sobre todas as tecnologias que são utilizadas"
      description="O Guiabolso Connect utiliza um protocolo de autenticação chamado..."
    />
  </div>
);
