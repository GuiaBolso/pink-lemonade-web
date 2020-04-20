import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react';
import {
  useCreateStore,
  createUseContext,
  SetState,
} from './create-store-hooks';

describe('test lib createUseContext', () => {
  interface State {
    count: number;
  }
  const initialState: State = { count: 0 };

  const actions = (setState: SetState<State>) => {
    const increment = () => setState(({ count }) => ({ count: count + 1 }));

    return { increment };
  };

  const selectors = ($state: State) => {
    const getCount = () => $state.count;

    return { getCount };
  };

  test('should be receive', () => {
    const [Provider, useContext] = createUseContext({
      name: 'myModuleStore',
      initialState,
      actions,
      selectors,
    });

    const Increment = () => {
      const {
        actions: { increment },
      } = useContext();

      return (
        <button data-testid="increment" onClick={increment}>
          Increment
        </button>
      );
    };

    const Count = () => {
      const {
        selectors: { getCount },
      } = useContext();
      return <div data-testid="getCount">{getCount()}</div>;
    };

    const App = () => (
      <Provider>
        <Increment />
        <Count />
      </Provider>
    );

    const { getByTestId } = render(<App />);
    expect(getByTestId('getCount').textContent).toEqual('0');

    fireEvent.click(getByTestId('increment'));
    expect(getByTestId('getCount').textContent).toEqual('1');

    fireEvent.click(getByTestId('increment'));
    expect(getByTestId('getCount').textContent).toEqual('2');
  });

  test('should be receive name Context and Provider', () => {
    const [Provider, , Context] = createUseContext({
      name: 'ModuleStore',
      initialState,
      actions,
      selectors,
    });

    expect(Provider.displayName).toBe(`ModuleStore.Provider`);
    expect(Context.displayName).toBe(`ModuleStore.Context`);
  });

  test('should be create useCreateStore', () => {
    const { result } = renderHook(() =>
      useCreateStore({
        initialState,
        selectors,
        actions,
      }),
    );

    act(() => result.current.actions.increment());
    expect(result.current.$state.count).toBe(1);
    expect(result.current.selectors.getCount()).toBe(1);
    act(() => result.current.actions.increment());
    expect(result.current.selectors.getCount()).toBe(2);
    expect(result.current.$state.count).toBe(2);
  });
});
