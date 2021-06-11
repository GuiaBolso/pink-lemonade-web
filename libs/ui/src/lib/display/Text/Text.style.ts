import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type TextProps = {
  variant?: string;
  as?: React.ElementType;
  theme: CustomThemeProps;
};

const variants = {
  'display-01': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxxxl};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.bold};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'display-02': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxxl};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.bold};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-01': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxl};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.bold};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-02': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.lg};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.bold};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-03': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.md};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.bold};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-04': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.sm};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.bold};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,
  'heading-05': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xs};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${theme?.type?.lineHeight?.rule1};
  `,
  'heading-06': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxs};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'button-medium': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xs};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${theme?.type?.lineHeight?.rule1};
  `,

  'body-medium': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xs};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'body-small': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxs};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'subtitle-medium': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxxs};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'subtitle-small': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxxxs};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'overline-medium': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxs};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule1};
    text-transform: uppercase;
  `,

  'overline-small': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxxxs};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    letter-spacing: 0.04em;
    line-height: ${theme?.type?.lineHeight?.rule1};
    text-transform: uppercase;
  `,

  'link-medium': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xs};

    color: ${theme?.colors?.brand?.secondary?.default};
    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${theme?.type?.lineHeight?.rule2};
    text-decoration: underline;
  `,

  'link-small': ({ theme }: TextProps) => css`
    --fontSize: ${theme?.type?.sizes?.xxs};

    color: ${theme?.colors?.brand?.secondary?.default};
    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${theme?.type?.lineHeight?.rule2};
    text-decoration: underline;
  `,
};

export const Text = styled.span<TextProps>`
  margin: 0;
  padding: 0;

  /* stylelint-disable-next-line */
  ${props => variants[props.variant]}
`;
