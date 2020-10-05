import React from 'react';
import { Text } from '../../display/Text';

import { InfoBanner } from './index';

export default {
  title: 'Notification/InfoBanner',
  component: InfoBanner,
  decorators: [
    /* eslint-disable-next-line */
    (story: any) => (
      <div
        style={{
          height: '100vh',
          border: '1px solid black',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Base = () => (
  <InfoBanner type="base">
    <Text variant="caption" component="p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      ratione deserunt, quae consectetur culpa iure sit obcaecati neque
      distinctio possimus exercitationem, in sint sequi expedita necessitatibus
      laborum quo assumenda dolorum!
    </Text>
  </InfoBanner>
);

export const TextButton = () => (
  <InfoBanner type="text-button">
    <Text variant="caption" component="p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      ratione deserunt, quae consectetur culpa iure sit obcaecati neque
      distinctio possimus exercitationem, in sint sequi expedita necessitatibus
      laborum quo assumenda dolorum!
    </Text>
  </InfoBanner>
);

export const TextClose = () => (
  <InfoBanner type="text-close">
    <Text variant="caption" component="p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      ratione deserunt, quae consectetur culpa iure sit obcaecati neque
      distinctio possimus exercitationem, in sint sequi expedita necessitatibus
      laborum quo assumenda dolorum!
    </Text>
  </InfoBanner>
);
