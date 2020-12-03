import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from './Text';

export default {
  title: 'Display/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Base = Template.bind({});

Base.args = {
  variant: 'heading-01',
  component: 'p',
  children: 'Text',
};

export const display01 = () => <Text variant="display-01">display-01</Text>;
export const display02 = () => <Text variant="display-02">display-02</Text>;
export const heading01 = () => <Text variant="heading-01">heading-01</Text>;
export const heading02 = () => <Text variant="heading-02">heading-02</Text>;
export const heading03 = () => <Text variant="heading-03">heading-03</Text>;
export const heading04 = () => <Text variant="heading-04">heading-04</Text>;
export const heading05 = () => <Text variant="heading-05">heading-05</Text>;
export const heading06 = () => <Text variant="heading-06">heading-06</Text>;
export const bodyMedium = () => <Text variant="body-medium">body-medium</Text>;
export const bodySmall = () => <Text variant="body-small">body-small</Text>;
export const subtitleMedium = () => (
  <Text variant="subtitle-medium">subtitle-medium</Text>
);
export const subtitleSmall = () => (
  <Text variant="subtitle-small">subtitle-small</Text>
);
export const OverlineMedium = () => (
  <Text variant="overline-medium">overline-medium</Text>
);
export const OverlineSmall = () => (
  <Text variant="overline-small">overline-small</Text>
);
export const LinkMedium = () => (
  <Text variant="link-medium" component="a">
    link-medium
  </Text>
);
export const LinkSmall = () => (
  <Text variant="link-small" component="a">
    link-small
  </Text>
);
