import React from 'react';
import { FloatingCard } from './index';

export default {
  title: 'Containers/FloatingCard',
  component: FloatingCard,
  decorators: [
    /* eslint-disable-next-line */
    (story: any) => (
      <div
        style={{
          maxWidth: '300px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Complete = () => (
  <FloatingCard
    category="Overview"
    title="Sobre as tecnologias utilizadas"
    description="O Guiabolso Connect utiliza um protocolo de autenticação chamado..."
  />
);
