import { useMediaQuery } from '../use-media-query/use-media-query';
import { defaultBreakpoints } from '../../emotion-query';

type Breakpoints = 'small' | 'medium' | 'large' | 'huge';
type LessGreaterParams = {
  breakpoint?: Breakpoints;
  customBreakpoint?: string;
};

type BreakpointProps = {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isHuge: boolean;
  lessThen: ({ breakpoint, customBreakpoint }: LessGreaterParams) => boolean;
  greaterThan: ({ breakpoint, customBreakpoint }: LessGreaterParams) => boolean;
  active: Breakpoints;
};

const useLessThen = ({ breakpoint, customBreakpoint }: LessGreaterParams) =>
  useMediaQuery(
    `(max-width: ${defaultBreakpoints[breakpoint] || customBreakpoint})`,
  );

const useGreaterThan = ({ breakpoint, customBreakpoint }: LessGreaterParams) =>
  useMediaQuery(
    `(min-width: ${defaultBreakpoints[breakpoint] || customBreakpoint})`,
  );

export function useBreakpoints() {
  const { small, medium, large, huge } = defaultBreakpoints;

  const breakpoints: BreakpointProps = {
    isSmall: useMediaQuery(`(max-width: ${small})`),
    isMedium: useMediaQuery(`(min-width: ${small}) and (max-width: ${medium})`),
    isLarge: useMediaQuery(`(min-width: ${medium}) and (max-width: ${large})`),
    isHuge: useMediaQuery(`(min-width: ${huge})`),
    lessThen: useLessThen,
    greaterThan: useGreaterThan,
    active: 'small',
  };

  if (breakpoints.isSmall) breakpoints.active = 'small';
  if (breakpoints.isMedium) breakpoints.active = 'medium';
  if (breakpoints.isLarge) breakpoints.active = 'large';
  if (breakpoints.isHuge) breakpoints.active = 'huge';

  return breakpoints;
}
