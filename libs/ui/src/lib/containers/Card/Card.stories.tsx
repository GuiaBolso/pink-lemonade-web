import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Card, CardHeader, CardContent, CardFooter } from './index';

import { Action } from '../../forms/Action';
import { Button } from '../../forms/Button';

import { ListAlt, MoreVert } from '../../icons';

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
} as Meta;

export const Complete = () => (
  <Card>
    <CardHeader
      title="Título do card"
      titleIcon={<MoreVert />}
      overline="Overview"
      overlineIcon={<ListAlt />}
    />

    <CardContent>
      Texto secundário do card que pode conter ate 2 linhas.
    </CardContent>

    <CardFooter
      addendum
      description="Você utiliza outro banco? Aproveite para adicionar enquanto carrega a conta acima"
      action={
        <Action scale="narrow" label="Action label" arrowPosition="trailing" />
      }
    />
  </Card>
);

export const CompleteWithButton = () => (
  <Card>
    <CardHeader
      title="Card com botão"
      titleIcon={<MoreVert />}
      overline="Título do card"
      overlineIcon={<ListAlt />}
    />

    <CardContent>
      Texto secundário do card que pode conter ate 2 linhas.
    </CardContent>

    <CardFooter action={<Button label="Action label" scale="wide-thin" />} />
  </Card>
);

export const Outlined = () => (
  <Card variant="outlined">
    <CardHeader title="Análise completa" titleIcon={<MoreVert />} />

    <CardContent>
      Nossa tecnologia realiza a leitura do extrato da sua conta corrente e
      entende seus hábitos e o momento financeiro para ajudar o Parceiro a
      encontrar a melhor oferta para você.
    </CardContent>
  </Card>
);

export const NoIcon = () => (
  <Card>
    <CardHeader title="Análise completa" />

    <CardContent>
      Nossa tecnologia realiza a leitura do extrato da sua conta corrente e
      entende seus hábitos e o momento financeiro para ajudar o Parceiro a
      encontrar a melhor oferta para você.
    </CardContent>
  </Card>
);

export const TitleOnly = () => (
  <Card>
    <CardHeader title="Análise completa" />
  </Card>
);

export const ContentOnly = () => (
  <Card>
    <CardContent>
      Nossa tecnologia realiza a leitura do extrato da sua conta corrente e
      entende seus hábitos e o momento financeiro para ajudar o Parceiro a
      encontrar a melhor oferta para você.
    </CardContent>
  </Card>
);
