import React, { memo } from 'react';
import { useTheme } from 'emotion-theming';

import { Text, themeProps } from '@guiabolsobr/ui';
import * as S from './CardHeader.style';

type CardHeaderProps = {
  title: React.ReactNode;
  titleIcon?: React.ReactNode;
  overline?: React.ReactNode;
  overlineIcon?: React.ReactNode;
};

const CardHeader = ({
  title,
  titleIcon,
  overline,
  overlineIcon,
}: CardHeaderProps) => {
  const theme = useTheme<themeProps>();
  const OVERLINE_VARIATION =
    theme.name === 'connect' ? 'overline' : 'overline-small';

  return (
    <S.Header hasOverlineText={!!overline}>
      {overline && (
        <>
          <S.Overline>
            {typeof overline === 'string' ? (
              <Text variant={OVERLINE_VARIATION} component="p" role="paragraph">
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
};

export default memo(CardHeader);
