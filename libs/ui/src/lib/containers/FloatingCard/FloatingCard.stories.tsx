import React from 'react';
import { FloatingCard } from './index';

export default {
  title: 'Containers/FloatingCard',
  component: FloatingCard,
};

export const SingleCard = () => (
  <div
    style={{
      display: 'flex',
      maxWidth: '300px',
    }}
  >
    <FloatingCard
      category="Overview"
      title="Sobre as tecnologias utilizadas"
      description="O Guiabolso Connect utiliza um protocolo de autenticação chamado..."
    />
  </div>
);

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
