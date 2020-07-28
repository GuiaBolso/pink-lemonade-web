import React, { memo } from 'react';
import { useTheme } from 'emotion-theming';

import { Text, themeProps } from '@guiabolsobr/ui';
import * as S from './CarHeader.style';

type CardHeaderProps = {
  title: React.ReactNode;
  titleIcon?: React.ReactNode;
  suptitle?: React.ReactNode;
  suptitleIcon?: React.ReactNode;
};

const CardHeader = ({
  title,
  titleIcon,
  suptitle,
  suptitleIcon,
}: CardHeaderProps) => {
  const theme = useTheme<themeProps>();
  const SUPTITLE_VARIATION =
    theme.name === 'connect' ? 'overline' : 'overline-small';

  return (
    <S.Header hasSuptitle={!!suptitle}>
      {suptitle && (
        <>
          <S.Suptitle>
            {typeof suptitle === 'string' ? (
              <Text variant={SUPTITLE_VARIATION} component="p" role="paragraph">
                {suptitle}
              </Text>
            ) : (
              suptitle
            )}
          </S.Suptitle>
          <S.SuptitleIcon>{suptitleIcon}</S.SuptitleIcon>
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
