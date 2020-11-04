import { setABTest, getABTestValue, getAllABTestValues } from './ab-test';

describe('A/B Test', () => {
  setABTest('test1', 'first test');
  setABTest('test2', 'second test');
  setABTest('test3', 'third test', 'sessionStorage');

  const test1 = getABTestValue('test1');
  const test2 = getABTestValue('ab-test-test2');
  const test3 = getABTestValue('test3');

  it('Should set a new item', () => {
    expect(test1).toBe('first test');
  });

  it('Should get with prefix', () => {
    expect(test2).toBe('second test');
  });

  it('Should get in session storage', () => {
    expect(test3).toBe('third test');
  });

  it('Should get all in a array of object', () => {
    const tests = getAllABTestValues();

    expect(tests).toHaveLength(3);
  });
});
