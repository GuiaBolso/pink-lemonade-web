import React from 'react';

import { Action } from './index';

export default {
  title: 'Forms/Actions',
  component: Action,
};

export const IconLeading = () => <Action label="Action Label" arrowPosition="leading" />;

export const IconTrailling = () => <Action label="Action Label" arrowPosition="trailing" />;

export const Wide = () => <Action label="Action Label" arrowPosition="trailing" wide />;
