import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import { useDidUpdate } from './use-did-update';

describe('useDidMount', () => {
  it('should render successfully', () => {
    const sideEffect = { 1: false, 2: false };

    const { unmount, rerender } = renderHook(
      ({ index }) => {
        useDidUpdate(() => {
          sideEffect[index] = true;

          return () => {
            sideEffect[index] = false;
          };
        }, [index]);
      },
      { initialProps: { index: 1 } },
    );

    expect(sideEffect[1]).toBe(true);
    expect(sideEffect[2]).toBe(false);

    rerender({ index: 2 });

    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(true);

    unmount();

    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(false);
  });

  it('should render successfully with Promise', async () => {
    const sideEffect = { 1: false, 2: false };

    const usePromised = () => {
      const [state, setstate] = React.useState(1);
      useDidUpdate(
        async () => {
          sideEffect[state] = true;
          await new Promise(resolve => setTimeout(resolve));
          act(() => setstate(2));
        },
        [state],
        () => {
          sideEffect[state] = false;
        },
      );

      return state;
    };

    const { result, unmount, rerender, waitForNextUpdate } = renderHook(() =>
      usePromised(),
    );

    expect(result.current).toBe(1);
    expect(sideEffect[1]).toBe(true);
    expect(sideEffect[2]).toBe(false);
    await waitForNextUpdate();
    expect(result.current).toBe(2);
    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(true);

    rerender();
    expect(result.current).toBe(2);
    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(true);

    unmount();
    expect(result.current).toBe(2);
    expect(sideEffect[1]).toBe(false);
    expect(sideEffect[2]).toBe(false);
  });
});
