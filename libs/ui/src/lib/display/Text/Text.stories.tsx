import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from './Text';

export default {
  title: 'Display/Text',
  component: Text,
} as Meta;

const guiaBolsoParameters = {
  parameters: { notes: '### Exclusivo do tema GuiaBolso' },
};
const connectParameters = {
  parameters: { notes: '### Exclusivo do tema Connect' },
};

const Template: Story<TextProps> = args => <Text {...args} />;

export const Base = Template.bind({});

Base.args = {
  variant: 'heading-01',
  component: 'p',
  children: 'Text',
};

export const display00 = () => <Text variant="display-00">display-00</Text>;
display00.story = connectParameters;
export const display01 = () => <Text variant="display-01">display-01</Text>;
export const display02 = () => <Text variant="display-02">display-02</Text>;
export const heading01 = () => <Text variant="heading-01">heading-01</Text>;
export const heading02 = () => <Text variant="heading-02">heading-02</Text>;
export const heading03 = () => <Text variant="heading-03">heading-03</Text>;
export const heading04 = () => <Text variant="heading-04">heading-04</Text>;
export const heading05 = () => <Text variant="heading-05">heading-05</Text>;
export const heading06 = () => <Text variant="heading-06">heading-06</Text>;
heading06.story = connectParameters;

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

export const body01 = () => <Text variant="body-01">body-01</Text>;
body01.story = connectParameters;

export const body02 = () => <Text variant="body-02">body-02</Text>;
body02.story = connectParameters;

export const subtitle01 = () => <Text variant="subtitle-01">subtitle-01</Text>;
subtitle01.story = connectParameters;

export const subtitle02 = () => <Text variant="subtitle-02">subtitle-02</Text>;
subtitle02.story = connectParameters;

export const buttonText = () => <Text variant="button-text">button-text</Text>;
buttonText.story = connectParameters;

export const caption = () => <Text variant="subtitle-small">caption</Text>;
caption.story = connectParameters;

export const overline = () => <Text variant="overline">overline</Text>;
overline.story = connectParameters;

export const link = () => (
  <Text variant="link" component="a">
    link
  </Text>
);
link.story = connectParameters;
