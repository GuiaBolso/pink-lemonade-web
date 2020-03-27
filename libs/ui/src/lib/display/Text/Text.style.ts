import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type TextProps = {
  variant?: string;
  as?: React.ElementType;
  theme: CustomThemeProps;
};

const variants: object = {
  'display-00': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize80};
        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.light};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'display-01': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize64};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxxl};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.bold};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'display-02': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize48};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxl};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.bold};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'heading-01': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize42};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xl};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.bold};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'heading-02': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize32};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.lg};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.bold};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'heading-03': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize24};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.md};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.bold};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'heading-04': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize20};

        color: ${theme?.colors?.neutral.darkest};
        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
      `,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.sm};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.bold};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'heading-05': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize18};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.semibold};
        line-height: ${theme?.type?.lineHeight?.rule2};
      `,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xs};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.semibold};
        line-height: ${theme?.type?.lineHeight?.rule1};
      `,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'heading-06': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize14};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.semibold};
        line-height: ${theme?.type?.lineHeight?.rule2};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'body-01': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize16};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'body-02': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize14};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'subtitle-01': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize18};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule3};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'subtitle-02': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize16};

        font-family: ${theme?.type?.fontFamily?.brand};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule2};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'button-text': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize16};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  caption: ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize12};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  overline: ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
        --fontSize: ${theme?.type?.sizes?.fontSize12};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
        text-transform: uppercase;
      `,
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  link: ({ theme }: TextProps) => {
    const themeName = {
      connect: () => css`
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
      guiaBolso: () => null,
    };

    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'body-medium': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xs};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule2};
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'body-small': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxs};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule2};
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'subtitle-medium': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxs};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'subtitle-small': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxxs};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule2};
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'overline-medium': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxs};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
        text-transform: uppercase;
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'overline-small': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxxs};

        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.regular};
        line-height: ${theme?.type?.lineHeight?.rule1};
        text-transform: uppercase;
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'link-medium': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xs};

        color: ${theme?.colors?.brand?.secondary?.default};
        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.semibold};
        line-height: ${theme?.type?.lineHeight?.rule2};
        text-decoration: underline;
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },

  'link-small': ({ theme }: TextProps) => {
    const themeName = {
      connect: () => null,
      guiaBolso: () => css`
        --fontSize: ${theme?.type?.sizes?.xxs};

        color: ${theme?.colors?.brand?.secondary?.default};
        font-family: ${theme?.type?.fontFamily?.neutral};
        font-size: var(--fontSize);
        font-weight: ${theme?.type?.fontWeight?.semibold};
        line-height: ${theme?.type?.lineHeight?.rule2};
        text-decoration: underline;
      `,
    };
    return (themeName[theme?.name] || themeName.guiaBolso)();
  },
};

export const Text = styled.span<TextProps>`
  margin: 0;
  padding: 0;

  /* stylelint-disable-next-line */
  ${props => variants[props.variant]}
`;
