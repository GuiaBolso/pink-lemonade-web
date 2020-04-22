import { DeepPartial } from '../../types';
/**
 * merge deep two objects
 */
export const mergeRight = <T, P>(
  /** source object (override source) */
  source: T,
  /** target object (original obj) */
  target: DeepPartial<P> = {},
  /** configs */
  config?: {
    /** allow deep merge */
    allowDeep?: boolean;
  },
): T & P => {
  const isDeep = (prop: string) =>
    config &&
    config.allowDeep &&
    typeof source[prop] === 'object' &&
    prop in target &&
    typeof target[prop] === 'object';

  const replaced = Object.getOwnPropertyNames(source)
    .map(prop => ({
      [prop]: (() => {
        if (Array.isArray(source[prop])) {
          return source[prop];
        }

        return isDeep(prop)
          ? mergeRight(source[prop], target[prop], config)
          : source[prop];
      })(),
    }))
    .reduce((a, b) => ({ ...a, ...b }), {});

  return {
    ...target,
    ...replaced,
  } as P & T;
};
