import React from 'react';
import { Text } from '.';

export default {
  title: 'Display/Text',
};

const connectParamaters = {
  parameters: { notes: '### Exclusivo do tema Connect' },
};

export const display00 = () => <Text variant="display-00">display-00</Text>;
display00.story = connectParamaters;

export const display01 = () => <Text variant="display-01">display-01</Text>;
export const display02 = () => <Text variant="display-02">display-02</Text>;
export const heading01 = () => <Text variant="heading-01">heading-01</Text>;
export const heading02 = () => <Text variant="heading-02">heading-02</Text>;
export const heading03 = () => <Text variant="heading-03">heading-03</Text>;
export const heading04 = () => <Text variant="heading-04">heading-04</Text>;
export const heading05 = () => <Text variant="heading-05">heading-05</Text>;
export const heading06 = () => <Text variant="heading-06">heading-06</Text>;
heading06.story = connectParamaters;

export const body01 = () => <Text variant="body-01">body-01</Text>;
body01.story = connectParamaters;

export const body02 = () => <Text variant="body-02">body-02</Text>;
body02.story = connectParamaters;

export const subtitle01 = () => <Text variant="subtitle-01">subtitle-01</Text>;
subtitle01.story = connectParamaters;

export const subtitle02 = () => <Text variant="subtitle-02">subtitle-02</Text>;
subtitle02.story = connectParamaters;

export const buttonText = () => <Text variant="button-text">button-text</Text>;
buttonText.story = connectParamaters;

export const caption = () => <Text variant="caption">caption</Text>;
caption.story = connectParamaters;

export const overline = () => <Text variant="overline">overline</Text>;
overline.story = connectParamaters;

export const link = () => (
  <Text variant="link" component="a" href="#">
    link
  </Text>
);
link.story = connectParamaters;
