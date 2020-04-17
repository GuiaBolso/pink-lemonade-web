import React from 'react';

import { Steps } from './index';

export default {
  title: 'Navigation/Steps',
  component: Steps,
};

export const ComponentSteps = () => <Steps totalSteps={5} currentStep={2} />;
