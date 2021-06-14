import React from 'react';
import { Text } from '../../display/Text';

import { InfoPanel } from './index';

import customIcon from '../../../assets/images/icons/award.svg';

export default {
  title: 'Notification/InfoPanel',
  component: InfoPanel,
  decorators: [
    /* eslint-disable-next-line */
    (story: any) => (
      <div
        style={{
          maxWidth: '450px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Complete = () => (
  <InfoPanel>
    <Text variant="heading-06" component="h3" style={{ marginBottom: '10px' }}>
      Não precisa autorizar mais nada
    </Text>

    <Text variant="subtitle-small" component="p">
      Talvez você receba um sms do seu banco solicitando para autorizar ou
      habilitar o GuiaBolso. Não precisa e pode ficar tranquilo que não faremos
      nenhum tipo de transação na conta.
    </Text>
  </InfoPanel>
);

export const ErrorType = () => (
  <InfoPanel feedbackType="error">
    <Text variant="heading-06" component="h3" style={{ marginBottom: '10px' }}>
      Não precisa autorizar mais nada
    </Text>

    <Text variant="subtitle-small" component="p">
      Talvez você receba um sms do seu banco solicitando para autorizar ou
      habilitar o GuiaBolso. Não precisa e pode ficar tranquilo que não faremos
      nenhum tipo de transação na conta.
    </Text>
  </InfoPanel>
);

export const TitleOnly = () => (
  <InfoPanel>
    <Text variant="heading-06" component="h3">
      Não precisa autorizar mais nada
    </Text>
  </InfoPanel>
);

export const TextOnly = () => (
  <InfoPanel>
    <Text variant="subtitle-small" component="p">
      Talvez você receba um sms do seu banco solicitando para autorizar ou
      habilitar o GuiaBolso. Não precisa e pode ficar tranquilo que não faremos
      nenhum tipo de transação na conta.
    </Text>
  </InfoPanel>
);

export const CustomIcon = () => (
  <InfoPanel imagePath={customIcon}>
    <Text variant="heading-06" component="h3" style={{ marginBottom: '10px' }}>
      Não precisa autorizar mais nada
    </Text>

    <Text variant="subtitle-small" component="p">
      Talvez você receba um sms do seu banco solicitando para autorizar ou
      habilitar o GuiaBolso. Não precisa e pode ficar tranquilo que não faremos
      nenhum tipo de transação na conta.
    </Text>
  </InfoPanel>
);
