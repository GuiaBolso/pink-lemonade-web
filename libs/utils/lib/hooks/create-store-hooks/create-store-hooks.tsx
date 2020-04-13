/* eslint-disable no-underscore-dangle */
import React from 'react';

declare global {
  interface Window {
    _REACT_CONTEXT_DEVTOOL: <T>(args: {
      displayName: string;
      id: string;
      values: T;
    }) => void;
  }
}

type Action<State, R> = (setState: SetState<State>) => R;
type Actions<State, A extends Action<State, A>> = Action<State, ReturnType<A>>;

type Selector<State, R> = ($state: State) => R;
type Selectors<State, S extends Selector<State, S>> = Selector<
  State,
  ReturnType<S>
>;

export interface CreateUseContext<
  State,
  A extends Actions<State, A>,
  S extends Selectors<State, S>
> {
  name?: string;
  initialState?: State;
  actions: A;
  selectors?: S;
}

export type SetState<S> = React.Dispatch<React.SetStateAction<S>>;
export const useCreateStore = <
  State,
  A extends Actions<State, A>,
  S extends Selectors<State, S>
>({
  actions,
  selectors,
  initialState,
}: CreateUseContext<State, A, S>) => {
  const [$state, setState] = React.useState<State>(initialState);

  return { $state, actions: actions(setState), selectors: selectors($state) };
};

const addReactContextDevTools = <T extends {}>(
  values: T,
  name: string,
  id: string,
) => {
  if (window._REACT_CONTEXT_DEVTOOL) {
    window._REACT_CONTEXT_DEVTOOL({
      values,
      id,
      displayName: `Context: ${name}`,
    });
  }
};

export const createUseContext = <
  State,
  A extends Actions<State, A>,
  S extends Selectors<State, S>
>({
  name,
  actions,
  selectors,
  initialState,
}: CreateUseContext<State, A, S>) => {
  interface Values {
    $state: State;
    actions: ReturnType<A>;
    selectors: ReturnType<S>;
  }

  const Context = React.createContext({} as Values);
  // eslint-disable-next-line react/prop-types
  const Provider: React.FunctionComponent<{}> = ({ children }) => {
    const values: Values = useCreateStore({
      name,
      actions,
      selectors,
      initialState,
    });

    addReactContextDevTools(values, name, 'idUser');

    return <Context.Provider value={values}>{children}</Context.Provider>;
  };

  Context.displayName = `${name}.Context`;
  Provider.displayName = `${name}.Provider`;

  const useContext = () => React.useContext(Context);

  return [Provider, useContext, Context] as [
    {
      (props: { children: React.ReactNode }): JSX.Element;
      displayName: string;
    },
    () => Values,
    React.Context<Values>,
  ];
};
