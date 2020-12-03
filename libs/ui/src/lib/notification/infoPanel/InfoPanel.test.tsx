import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Theme } from '../../general';
import { connect, guiaBolso } from '../../../designSystem/tokens';

import { InfoPanel } from './index';
import { Text } from '../../display/Text';

describe('InfoPanel Component', () => {
  const InfoPanelComponent = () => (
    <Theme theme={guiaBolso}>
      <InfoPanel>
        <Text
          variant="heading-06"
          component="h3"
          style={{ marginBottom: '10px' }}
        >
          Não precisa autorizar mais nada
        </Text>

        <Text variant="subtitle-small" component="p">
          Talvez você receba um sms do seu banco solicitando para autorizar ou
          habilitar o GuiaBolso. Não precisa e pode ficar tranquilo que não
          faremos nenhum tipo de transação na conta.
        </Text>
      </InfoPanel>
    </Theme>
  );

  const InfoPanelComponentConnect = () => (
    <Theme theme={connect}>
      <InfoPanel>
        <Text
          variant="heading-06"
          component="h3"
          style={{ marginBottom: '10px' }}
        >
          Não precisa autorizar mais nada
        </Text>

        <Text variant="subtitle-small" component="p">
          Talvez você receba um sms do seu banco solicitando para autorizar ou
          habilitar o GuiaBolso. Não precisa e pode ficar tranquilo que não
          faremos nenhum tipo de transação na conta.
        </Text>
      </InfoPanel>
    </Theme>
  );

  it('Renders correctly', () => {
    const tree = renderer.create(<InfoPanelComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders Connect Theme correctly', () => {
    const tree = renderer.create(<InfoPanelComponentConnect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
