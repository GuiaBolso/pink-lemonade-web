import React from 'react';
import * as Styled from './style';

interface TextProps {
  /**
   * Component tag that will be rendered
   */
  component?: React.ElementType; // Component tag that will be rendered (div, p, strong, etc)
  /**
   * Text or Component that will be rendered (string, number, other component)
   */
  children: React.ReactNode;
  /**
   * Variation of style that the component will assume (caption, subtitle, title-1, etc)
   */
  variant?: string;
}

const Text = ({
  children,
  component = 'span',
  variant = 'body-1',
}: TextProps) => {
  return (
    <Styled.Text as={component} variant={variant}>
      {children}
    </Styled.Text>
  );
};

export default Text;
