import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useDidMount } from './use-did-mount';

describe('useDidMount', () => {
  it('should render successfully', () => {
    const sideEffect = { 1: false, 2: false };

    const { unmount, rerender } = renderHook(
      ({ index }) => {
        useDidMount(() => {
          sideEffect[index] = true;

          return () => {
            sideEffect[index] = false;
          };
        });
      },
      { initialProps: { index: 1 } },
    );

    expect(sideEffect[1]).toBe(true);

    rerender({ index: 2 });

    expect(sideEffect[1]).toBe(true);
    expect(sideEffect[2]).toBe(false);

    unmount();

    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(false);
  });

  it('should render successfully with Promise', async () => {
    const sideEffect = { 1: false, 2: false };

    const usePromised = (index: number) => {
      const [state, setState] = React.useState(undefined);
      useDidMount(
        async () => {
          await Promise.resolve();
          sideEffect[index] = true;
          setState(() => 'mount');
        },
        () => {
          sideEffect[index] = false;
        },
      );

      return state;
    };

    const { result, unmount, rerender, waitForNextUpdate } = renderHook(
      ({ index }) => usePromised(index),
      { initialProps: { index: 1 } },
    );

    expect(result.current).toBeUndefined();
    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(false);

    await waitForNextUpdate();
    expect(result.current).toBe('mount');
    expect(sideEffect[1]).toBe(true);
    expect(sideEffect[2]).toBe(false);

    rerender();
    expect(sideEffect[1]).toBe(true);
    expect(sideEffect[2]).toBe(false);

    unmount();
    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(false);
  });
});
