import React, { memo } from 'react';
import * as Styled from './Text.style';

export type VariantProps =
  | 'display-00'
  | 'display-01'
  | 'display-02'
  | 'heading-01'
  | 'heading-02'
  | 'heading-03'
  | 'heading-04'
  | 'heading-05'
  | 'heading-06'
  | 'body-01'
  | 'body-02'
  | 'subtitle-01'
  | 'subtitle-02'
  | 'button-text'
  | 'caption'
  | 'overline'
  | 'link'
  | 'body-medium'
  | 'body-small'
  | 'subtitle-medium'
  | 'subtitle-small'
  | 'overline-medium'
  | 'overline-small'
  | 'link-medium'
  | 'link-small';

export type TextProps = React.ComponentProps<'span'> & {
  /**
   * Component tag that will be rendered
   */
  component?: React.ElementType; // Component tag that will be rendered (div, p, strong, etc)
  /**
   * Text or Component that will be rendered (string, number, other component)
   */
  children: React.ReactNode;
  /**
   * Variation of style that the component will assume (caption, subtitle-01, link, etc)
   */
  variant?: VariantProps;
};

export const Text = ({
  children,
  component = 'span',
  variant = 'body-01',
  ...rest
}: TextProps) => {
  return (
    <Styled.Text as={component} variant={variant} data-testid="text" {...rest}>
      {children}
    </Styled.Text>
  );
};

export default memo(Text);
