import styled from '@emotion/styled';
import { css } from '@emotion/core';

const variants: object = {
  'display-00': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize80};
    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.light};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'display-01': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize64};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'display-02': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize48};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-01': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize42};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-02': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize32};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-03': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize24};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'heading-04': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize20};

    color: ${theme?.colors?.neutral.darkest};
    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule1};
  `,

  'heading-05': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize18};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'heading-06': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize14};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'body-01': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize16};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'body-02': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize14};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule1};
  `,

  'subtitle-01': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize18};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule3};
  `,

  'subtitle-02': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize16};

    font-family: ${theme?.type?.fontFamily?.brand};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule2};
  `,

  'button-text': ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize16};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule1};
  `,

  caption: ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize12};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule1};
  `,

  overline: ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize12};

    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.regular};
    line-height: ${theme?.type?.lineHeight?.rule1};
    text-transform: uppercase;
  `,

  link: ({ theme }) => css`
    --fontSize: ${theme?.type?.sizes?.fontSize16};

    color: ${theme?.colors?.neutral?.darkest};
    font-family: ${theme?.type?.fontFamily?.neutral};
    font-size: var(--fontSize);
    font-weight: ${theme?.type?.fontWeight?.semibold};
    line-height: ${`-webkit-${theme?.type?.lineHeight?.rule2}`};
    line-height: ${`-moz-${theme?.type?.lineHeight?.rule2}`};
    line-height: ${theme?.type?.lineHeight?.rule2};
    text-decoration: underline;

    &:hover {
      color: ${theme?.colors?.brand?.secondary?.dark};
    }

    &:visited {
      color: ${theme?.colors?.brand?.primary?.default};
    }
  `,
};

export const Text = styled.span<{ variant: string }>`
  margin: 0;
  padding: 0;

  /* stylelint-disable-next-line */
  ${props => {
    console.log('fgdfgfdgdfgdf', variants[props.variant]);
    return variants[props.variant];
  }}
`;
