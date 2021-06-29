import React from 'react';
import Text from '../../display/Text/Text';
import Checkbox from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox.type,
};

export const simple = () => (
  <Checkbox label={<span>Receber newsletter</span>} name="newsletter" />
);

export const simpleWithLongText = () => (
  <Checkbox
    label={
      <>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse soluta
          corrupti officia quam qui, incidunt corporis quod id voluptatibus
          asperiores autem natus unde saepe.{' '}
          <b>Corrupti ad accusantium maxime </b> odio reprehenderit.
        </Text>
      </>
    }
    name="newsletter"
  />
);

export const standAlone = () => (
  <Checkbox
    label={<span>Receber newsletter</span>}
    variant="stand-alone"
    name="newsletter"
  />
);

export const checked = () => (
  <Checkbox
    defaultChecked
    label={<span>Receber newsletter</span>}
    name="newsletter"
  />
);

export const disabled = () => (
  <Checkbox
    label={<span>Receber newsletter</span>}
    checked
    disabled
    name="newsletter"
  />
);
