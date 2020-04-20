import { act, renderHook } from '@testing-library/react-hooks';

import { useMagicState } from './use-magic-state';

describe(' UseMagicState', () => {
  it('should use basic setState value', () => {
    const { result } = renderHook(() => useMagicState({ count: 1 }));

    const [state1, setState] = result.current;

    expect(state1.count).toBe(1);

    act(() => {
      setState({ count: 2 });
    });

    const [state2] = result.current;

    expect(state2.count).toBe(2);
  });

  it('should use deep complex setState value', () => {
    const { result } = renderHook(() =>
      useMagicState(
        {
          numbers: { counters: { count: 1 }, name: { first: 'John due' } },
          test: true,
          test2: {
            array: [1],
          },
        },
        { allowDeep: true },
      ),
    );

    const [state1, setState] = result.current;

    expect(state1.numbers.counters.count).toBe(1);
    expect(state1.numbers.name.first).toBe('John due');
    expect(state1.test).toBe(true);
    expect(state1.test2.array).toEqual([1]);

    act(() => {
      setState({ numbers: { counters: { count: 2 } } });
    });

    const [state2] = result.current;

    expect(state2.numbers.counters.count).toBe(2);
    expect(state2.numbers.name.first).toBe('John due');
    expect(state2.test).toBe(true);
    expect(state2.test2.array).toEqual([1]);

    act(() => {
      setState({ numbers: { name: { first: 'Foo bar' } } });
    });

    const [state3] = result.current;

    expect(state3.numbers.counters.count).toBe(2);
    expect(state3.numbers.name.first).toBe('Foo bar');
    expect(state3.test).toBe(true);
    expect(state3.test2.array).toEqual([1]);

    act(() => {
      setState({ test: false });
    });

    const [state4] = result.current;

    expect(state4.numbers.counters.count).toBe(2);
    expect(state4.numbers.name.first).toBe('Foo bar');
    expect(state4.test).toBe(false);
    expect(state4.test2.array).toEqual([1]);

    act(() => {
      setState({ test2: { array: [2] } });
    });

    const [state5] = result.current;

    expect(state5.numbers.counters.count).toBe(2);
    expect(state5.numbers.name.first).toBe('Foo bar');
    expect(state5.test).toBe(false);
    expect(state5.test2.array).toEqual([2]);
  });
});
