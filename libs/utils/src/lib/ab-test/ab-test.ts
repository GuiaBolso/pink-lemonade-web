export const setABTest = (name: string, value: string) => {
  if (!window || !window.localStorage) return;

  return localStorage.setItem(`ab-test-${name}`, value);
};

export const getABTestValue = (name: string) => {
  if (!window || !window.localStorage) return;

  return localStorage.getItem(`ab-test-${name}`) || localStorage.getItem(name);
};

export const getAllABTestValues = ():
  | []
  | { name: string; value: string }[] => {
  if (!window || !window.localStorage) return;

  const tests = [];

  for (const key in localStorage) {
    if (key.indexOf('ab-test') !== -1) {
      tests.push({
        name: key,
        value: localStorage.getItem(key),
      });
    }
  }

  return tests;
};
