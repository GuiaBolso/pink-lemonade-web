import { getLastValue } from './get-last-value';

describe('get last value', () => {
  it('should get last array value', () => {
    const array = ['a', 'b', 10, 20, 20, 60];

    expect(getLastValue(array)).toEqual(60);
  });

  it('should be undefined if empty array', () => {
    const array = [];

    expect(getLastValue(array)).toEqual(undefined);
  });
});
