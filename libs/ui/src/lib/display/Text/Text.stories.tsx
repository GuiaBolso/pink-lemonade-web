import React from 'react';
import { Text } from '.';
import { Theme } from '../../general';
import { guiaBolso } from '../../../designSystem/tokens';

export default {
  title: 'Display/Text/GuiaBolso',
};

export const display01 = () => (
  <Theme theme={guiaBolso}>
    <Text variant="display-01">display-01</Text>
  </Theme>
);
export const display02 = () => (
  <Theme theme={guiaBolso}>
    <Text variant="display-02">display-02</Text>
  </Theme>
);
export const heading01 = () => (
  <Theme theme={guiaBolso}>
    <Text variant="heading-01">heading-01</Text>
  </Theme>
);
export const heading02 = () => (
  <Theme theme={guiaBolso}>
    <Text variant="heading-02">heading-02</Text>
  </Theme>
);
export const heading03 = () => (
  <Theme theme={guiaBolso}>
    <Text variant="heading-03">heading-03</Text>
  </Theme>
);
export const heading04 = () => (
  <Theme theme={guiaBolso}>
    <Text variant="heading-04">heading-04</Text>
  </Theme>
);
export const heading05 = () => (
  <Theme theme={guiaBolso}>
    <Text variant="heading-05">heading-05</Text>
  </Theme>
);
export const bodyMedium = () => (
  <Theme theme={guiaBolso}>
    <Text variant="body-medium">body-medium</Text>
  </Theme>
);
export const bodySmall = () => (
  <Theme theme={guiaBolso}>
    <Text variant="body-small">body-small</Text>
  </Theme>
);
export const subtitleMedium = () => (
  <Theme theme={guiaBolso}>
    <Text variant="subtitle-medium">subtitle-medium</Text>
  </Theme>
);
export const subtitleSmall = () => (
  <Theme theme={guiaBolso}>
    <Text variant="subtitle-small">subtitle-small</Text>
  </Theme>
);
export const OverlineMedium = () => (
  <Theme theme={guiaBolso}>
    <Text variant="overline-medium">overline-medium</Text>
  </Theme>
);
export const OverlineSmall = () => (
  <Theme theme={guiaBolso}>
    <Text variant="overline-small">overline-small</Text>
  </Theme>
);
export const LinkMedium = () => (
  <Theme theme={guiaBolso}>
    <Text variant="link-medium" component="a" href="#">
      link-medium
    </Text>
  </Theme>
);
export const LinkSmall = () => (
  <Theme theme={guiaBolso}>
    <Text variant="link-small" component="a" href="#">
      link-small
    </Text>
  </Theme>
);
