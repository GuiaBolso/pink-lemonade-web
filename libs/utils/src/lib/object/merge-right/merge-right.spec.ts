import { mergeRight } from './merge-right';

describe('merge', () => {
  it('should merge Objects and all nested', () => {
    const target = {
      a: { a1: 'A1' },
      c: 'C',
      d: { d1: { d11: 1 } },
      e: undefined,
      f: 2,
    };
    const source = {
      a: { a2: 'A2' },
      b: { b1: 'B1' },
      d: { d1: { d11: 2 } },
      e: 1,
      f: undefined,
    };
    const expected = {
      a: { a1: 'A1', a2: 'A2' },
      b: { b1: 'B1' },
      c: 'C',
      d: { d1: { d11: 2 } },
      e: 1,
      f: undefined,
    };

    expect(mergeRight(source, target, { allowDeep: true })).toEqual(expected);
  });

  it('should not merge array values, just override', () => {
    const target = { a: ['A', 'B'] };
    const source = { a: ['C'], b: ['D'] };
    const expected = { a: ['C'], b: ['D'] };

    expect(mergeRight(source, target)).toEqual(expected);
  });
});
