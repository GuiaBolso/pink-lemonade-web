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
  display: 'select',
};

const withGlobal = cb => {
  const value = options(
    'Tema', // Label
    themesValueOptions, // Options
    themesValueOptions.guiaBolso, // Default
    optionType, // Display Property
    'Opções Globais', // Group
  );

  return <Theme theme={themes[value]}>{cb()}</Theme>;
};

export const decorators = [withKnobs, withGlobal];
