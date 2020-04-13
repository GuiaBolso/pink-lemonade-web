import React from 'react';
import { Text } from '.';

export default {
  title: 'Display/Text',
  component: Text,
};

const guiaBolsoParameters = {
  parameters: { notes: '### Exclusivo do tema GuiaBolso' },
};

export const display01 = () => <Text variant="display-01">display-01</Text>;
export const display02 = () => <Text variant="display-02">display-02</Text>;
export const heading01 = () => <Text variant="heading-01">heading-01</Text>;
export const heading02 = () => <Text variant="heading-02">heading-02</Text>;
export const heading03 = () => <Text variant="heading-03">heading-03</Text>;
export const heading04 = () => <Text variant="heading-04">heading-04</Text>;
export const heading05 = () => <Text variant="heading-05">heading-05</Text>;

export const bodyMedium = () => <Text variant="body-medium">body-medium</Text>;
bodyMedium.story = guiaBolsoParameters;

export const bodySmall = () => <Text variant="body-small">body-small</Text>;
bodySmall.story = guiaBolsoParameters;

export const subtitleMedium = () => (
  <Text variant="subtitle-medium">subtitle-medium</Text>
);
subtitleMedium.story = guiaBolsoParameters;

export const subtitleSmall = () => (
  <Text variant="subtitle-small">subtitle-small</Text>
);
subtitleSmall.story = guiaBolsoParameters;

export const OverlineMedium = () => (
  <Text variant="overline-medium">overline-medium</Text>
);
OverlineMedium.story = guiaBolsoParameters;

export const OverlineSmall = () => (
  <Text variant="overline-small">overline-small</Text>
);
OverlineSmall.story = guiaBolsoParameters;

export const LinkMedium = () => (
  <Text variant="link-medium" component="a">
    link-medium
  </Text>
);
LinkMedium.story = guiaBolsoParameters;

export const LinkSmall = () => (
  <Text variant="link-small" component="a">
    link-small
  </Text>
);
LinkSmall.story = guiaBolsoParameters;
