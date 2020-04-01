import React from 'react';
import { Theme } from '../../general';
import { guiaBolso } from '../../../designSystem/tokens';
import Accordion from './Accordion';

export default {
  title: 'Navigation/Accordion/GuiaBolso',
};

export const base = () => (
  <Theme theme={guiaBolso}>
    <Accordion summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        commodo.
      </span>
    </Accordion>
    <Accordion summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
        rhoncus eros, at ullamcorper nibh. In a cursus erat. Donec.
      </span>
    </Accordion>
    <Accordion summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
      </span>
    </Accordion>
    <Accordion summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        nec lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
      </span>
    </Accordion>
  </Theme>
);

export const expanded = () => (
  <Theme theme={guiaBolso}>
    <Accordion initOpened summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        commodo.
      </span>
    </Accordion>
    <Accordion initOpened summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
        rhoncus eros, at ullamcorper nibh. In a cursus erat. Donec.
      </span>
    </Accordion>
    <Accordion initOpened summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
      </span>
    </Accordion>
    <Accordion initOpened summary={<span>Lorem Ipsum</span>}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        nec lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        lorem vitae metus gravida cursus vitae fringilla odio. Vestibulum
        interdum ac neque et vulputate. Aenean pellentesque velit condimentum,
        consequat nunc ut, semper est. Morbi non mi varius, hendrerit ex sit
        amet, maximus justo. Aenean pretium ligula id dolor bibendum tincidunt.
      </span>
    </Accordion>
  </Theme>
);
