import styled, { css } from 'styled-components';
import tokens from '../../../tokens';

const variants: any = {
  caption: () => css`
    font-size: ${tokens.fontSize('xxs')};
    font-weight: ${tokens.get('type.fontWeight.bold')};
    line-height: ${tokens.get('type.lineHeight.xs')};
    text-transform: uppercase;
  `,

  subtitle: () => css`
    font-size: ${tokens.fontSize('xs')};
    font-weight: ${tokens.get('type.fontWeight.normal')};
    line-height: ${tokens.get('type.lineHeight.s')};
  `,

  'body-1': () => css`
    font-size: ${tokens.fontSize('m')};
    font-weight: ${tokens.get('type.fontWeight.normal')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'body-2': () => css`
    font-size: ${tokens.fontSize('s')};
    font-weight: ${tokens.get('type.fontWeight.normal')};
    line-height: ${tokens.get('type.lineHeight.m')};
  `,

  'title-1': () => css`
    font-size: ${tokens.fontSize('l')};
    font-weight: ${tokens.get('type.fontWeight.bold')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'title-2': () => css`
    font-size: ${tokens.fontSize('m')};
    font-weight: ${tokens.get('type.fontWeight.semiBold')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'primary-button': () => css`
    font-size: ${tokens.fontSize('m')};
    font-weight: ${tokens.get('type.fontWeight.normal')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'seconday-button': () => css`
    font-size: ${tokens.fontSize('m')};
    font-weight: ${tokens.get('type.fontWeight.normal')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'tertiary-button': () => css`
    font-size: ${tokens.fontSize('m')};
    font-weight: ${tokens.get('type.fontWeight.semiBold')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'helper-text': () => css`
    font-size: ${tokens.fontSize('xs')};
    font-weight: ${tokens.get('type.fontWeight.normal')};
    line-height: ${tokens.get('type.lineHeight.s')};
  `,

  'input-label': () => css`
    font-size: ${tokens.fontSize('m')};
    font-weight: ${tokens.get('type.fontWeight.semiBold')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'input-text': () => css`
    font-size: ${tokens.fontSize('m')};
    font-weight: ${tokens.get('type.fontWeight.normal')};
    line-height: ${tokens.get('type.lineHeight.l')};
  `,

  'big-number': () => css`
    font-size: ${tokens.fontSize('xl')};
    font-weight: ${tokens.get('type.fontWeight.bold')};
    line-height: ${tokens.get('type.lineHeight.xl')};
  `,
};

export const Text = styled.span<{ variant: string }>`
  font-family: ${tokens.get('type.fontFamily.system')};
  ${props => variants[props.variant]};
`;
