import React, { useState } from 'react';
import Accordion from './Accordion';

export default {
  title: 'Navigation/Accordion',
  component: Accordion,
};

const loremIpsum = {
  title: 'Lorem Ipsum',
  smallText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo.',
  mediumText:
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rhoncus eros, at ullamcorper nibh.In a cursus erat.Donec.',
  largeText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem vitae metus gravida cursus vitae fringilla odio.Vestibulum interdum ac neque et vulputate.Aenean pellentesque velit condimentum, consequat nunc ut, semper est.Morbi non mi varius, hendrerit ex sit amet, maximus justo.Aenean pretium ligula id dolor bibendum tincidunt.',
  extraLargeText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean nec lorem vitae metus gravida cursus vitae fringilla odio.Vestibulum interdum ac neque et vulputate.Aenean pellentesque velit condimentum, consequat nunc ut, semper est.Morbi non mi varius, hendrerit ex sit amet, maximus justo.Aenean pretium ligula id dolor bibendum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean nec lorem vitae metus gravida cursus vitae fringilla odio.Vestibulum interdum ac neque et vulputate.Aenean pellentesque velit condimentum, consequat nunc ut, semper est.Morbi non mi varius, hendrerit ex sit amet, maximus justo.Aenean pretium ligula id dolor bibendum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean nec lorem vitae metus gravida cursus vitae fringilla odio.Vestibulum interdum ac neque et vulputate.Aenean pellentesque velit condimentum, consequat nunc ut, semper est.Morbi non mi varius, hendrerit ex sit amet, maximus justo.Aenean pretium ligula id dolor bibendum tincidunt.',
};

export const base = () => (
  <>
    <Accordion summary={loremIpsum.title}>{loremIpsum.smallText}</Accordion>
    <Accordion summary={loremIpsum.title}>{loremIpsum.mediumText}</Accordion>
    <Accordion summary={loremIpsum.title}>{loremIpsum.largeText}</Accordion>
    <Accordion summary={loremIpsum.title}>
      {loremIpsum.extraLargeText}
    </Accordion>
  </>
);

export const expanded = () => (
  <>
    <Accordion initOpened summary={loremIpsum.title}>
      {loremIpsum.smallText}
    </Accordion>
    <Accordion initOpened summary={loremIpsum.title}>
      {loremIpsum.mediumText}
    </Accordion>
    <Accordion initOpened summary={loremIpsum.title}>
      {loremIpsum.largeText}
    </Accordion>
    <Accordion initOpened summary={loremIpsum.title}>
      {loremIpsum.extraLargeText}
    </Accordion>
  </>
);

export const SingleExpand = () => {
  const [whoIsExpanded, setWhoIsExpanded] = useState<string | boolean>(false);

  return (
    <>
      <Accordion
        singleExpand
        summary={loremIpsum.title}
        panel="panel1"
        whoIsExpanded={whoIsExpanded}
        setWhoIsExpanded={setWhoIsExpanded}
      >
        {loremIpsum.smallText}
      </Accordion>
      <Accordion
        singleExpand
        summary={loremIpsum.title}
        panel="panel2"
        whoIsExpanded={whoIsExpanded}
        setWhoIsExpanded={setWhoIsExpanded}
      >
        {loremIpsum.mediumText}
      </Accordion>
      <Accordion
        singleExpand
        summary={loremIpsum.title}
        panel="panel3"
        whoIsExpanded={whoIsExpanded}
        setWhoIsExpanded={setWhoIsExpanded}
      >
        {loremIpsum.largeText}
      </Accordion>
      <Accordion
        singleExpand
        summary={loremIpsum.title}
        panel="panel4"
        whoIsExpanded={whoIsExpanded}
        setWhoIsExpanded={setWhoIsExpanded}
      >
        {loremIpsum.extraLargeText}
      </Accordion>
    </>
  );
};
