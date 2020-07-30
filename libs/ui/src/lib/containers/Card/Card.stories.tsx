import React from 'react';
import { Card, CardFooter } from './index';

import { Action } from "../../forms/Action";
import { Button } from "../../forms/Button";

import { ListAlt, MoreVert } from '@material-ui/icons';

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
          maxWidth: '325px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Complete = () => (
  <Card
    title="Título do card"
    titleIcon={<MoreVert />}
    overlineText="Overview"
    overlineTextIcon={<ListAlt />}
    content="Texto secundário do card que pode conter ate 2 linhas.">
      <CardFooter
        addendum
        description="Você utiliza outro banco? Aproveite para adicionar enquanto carrega a conta acima"
        action={
          <Action scale="narrow" label="Action label" arrowPosition="trailing" />
        }/>
  </Card>
);

export const CompleteWithButton = () => (
  <Card
    title="Card com botão"
    titleIcon={<MoreVert />}
    overlineText="Overview"
    overlineTextIcon={<ListAlt />}
    content="Texto secundário do card que pode conter ate 2 linhas.">
      <CardFooter action={<Button label="Action label" scale="wide-thin" />} />
  </Card>
);

export const Outlined = () => (
  <Card
    variant="outlined"
    title="Análise completa"
    titleIcon={<MoreVert />}
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
