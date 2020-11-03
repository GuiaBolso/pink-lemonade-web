import { setABTest, getABTestValue, getAllABTestValues } from './ab-test';

describe('A/B Test', () => {
  setABTest('test1', 'first test');
  setABTest('test2', 'second test');

  const test1 = getABTestValue('test1');
  const test2 = getABTestValue('ab-test-test2');

  it('Should set a new item', () => {
    expect(test1).toBe('first test');
  });

  it('Should get with prefix', () => {
    expect(test2).toBe('second test');
  });

  it('Should get all in a array of object', () => {
    const tests = getAllABTestValues();

    expect(tests).toHaveLength(2);
  });
});
