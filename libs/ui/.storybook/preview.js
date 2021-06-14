import React from 'react';

import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import { Theme } from '../src/lib/general';
import { guiaBolso, connect } from '../src/designSystem/tokens';

const themes = {
  guiaBolso,
  connect,
};

const themesValueOptions = {
  guiaBolso: 'guiaBolso',
  connect: 'connect',
};

const optionType = {
  display: 'inline-radio',
};

const withGlobal = Story => {
  const value = options(
    'Tema', // Label
    themesValueOptions, // Options
    themesValueOptions.guiaBolso, // Default
    optionType, // Display Property
    'Opções Globais', // Group
  );

  return (
    <Theme theme={themes[value]}>
      <Story />
    </Theme>
  );
};

export const decorators = [withKnobs, withGlobal];
