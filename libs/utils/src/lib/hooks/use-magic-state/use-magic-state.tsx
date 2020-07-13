import React from 'react';
import { mergeRight } from '../../object/merge-right/merge-right';
import { DeepPartial } from '../../types';

type MutateDeep<S> = DeepPartial<S> | ((prev: S) => DeepPartial<S>);

export type SetMagicState<S> = (mutate: MutateDeep<S>) => Partial<S>;

export type UseMagicState<T> = {
  initialState?: T;
  config?: {
    allowDeep?: boolean;
  };
};

type ConfigMagicState = {
  allowDeep?: boolean;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const useMagicState = <S extends {}>(
  initialState: S,
  { allowDeep }: ConfigMagicState = {},
) => {
  const [$state, setState] = React.useState(initialState);

  const setMagicState = (mutate: MutateDeep<S>) => {
    let result: MutateDeep<S>;
    setState(prevState => {
      const newState = mergeRight(
        typeof mutate === 'function' ? mutate(prevState) : mutate,
        prevState,
        { allowDeep },
      );

      result = newState;

      return newState as S;
    });

    return result;
  };

  const tuple = [$state, setMagicState];

  return tuple as [S, SetMagicState<S>];
};
