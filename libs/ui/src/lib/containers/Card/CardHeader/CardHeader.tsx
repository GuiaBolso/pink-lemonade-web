import React, { memo } from 'react';

import { Text } from '@guiabolsobr/ui';
import * as S from './CardHeader.style';

type CardHeaderProps = {
  title: React.ReactNode;
  titleIcon?: React.ReactNode;
  overline?: React.ReactNode;
  overlineIcon?: React.ReactNode;
} & React.ComponentProps<'header'>;

const CardHeader = ({
  title,
  titleIcon,
  overline,
  overlineIcon,
  ...props
}: CardHeaderProps) => (
  <S.Header hasOverlineText={!!overline} {...props}>
    {overline && (
      <>
        <S.Overline>
          {typeof overline === 'string' ? (
            <Text variant="overline-small" component="p" role="paragraph">
              {overline}
            </Text>
          ) : (
            overline
          )}
        </S.Overline>
        <S.OverlineIcon>{overlineIcon}</S.OverlineIcon>
      </>
    )}

    <S.Title>
      {typeof title === 'string' ? (
        <Text variant="heading-05" component="h5">
          {title}
        </Text>
      ) : (
        title
      )}
    </S.Title>
    {title && <S.TitleIcon>{titleIcon}</S.TitleIcon>}
  </S.Header>
);

export default memo(CardHeader);
