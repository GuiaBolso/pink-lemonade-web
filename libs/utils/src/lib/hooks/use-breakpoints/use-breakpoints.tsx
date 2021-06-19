import { useMediaQuery } from '../use-media-query/use-media-query';
import { defaultBreakpoints } from '../../emotion-query';

type BreakpointProps = {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isHuge: boolean;
  active: 'small' | 'medium' | 'large' | 'huge';
};

export function useBreakpoints() {
  const { small, medium, large, huge } = defaultBreakpoints;
  const breakpoints: BreakpointProps = {
    isSmall: useMediaQuery(`(max-width: ${small})`),
    isMedium: useMediaQuery(`(min-width: ${small}) and (max-width: ${medium})`),
    isLarge: useMediaQuery(`(min-width: ${medium}) and (max-width: ${large})`),
    isHuge: useMediaQuery(`(min-width: ${huge})`),
    active: 'small',
  };
  if (breakpoints.isSmall) breakpoints.active = 'small';
  if (breakpoints.isMedium) breakpoints.active = 'medium';
  if (breakpoints.isLarge) breakpoints.active = 'large';
  if (breakpoints.isHuge) breakpoints.active = 'huge';
  return breakpoints;
}
