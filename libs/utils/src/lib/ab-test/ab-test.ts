export const setABTest = (
  name: string,
  value: string,
  storage: 'localStorage' | 'sessionStorage' = 'localStorage',
) => {
  if (!window || !window.localStorage || !window.sessionStorage) return;

  if (storage === 'sessionStorage') {
    return sessionStorage.setItem(`ab-test-${name}`, value);
  }

  return localStorage.setItem(`ab-test-${name}`, value);
};

export const getABTestValue = (name: string) => {
  if (!window || !window.localStorage || !window.sessionStorage) return;

  return (
    localStorage.getItem(`ab-test-${name}`) ||
    localStorage.getItem(name) ||
    sessionStorage.getItem(`ab-test-${name}`) ||
    sessionStorage.getItem(name)
  );
};

export const getAllABTestValues = ():
  | []
  | { name: string; value: string }[] => {
  if (!window || !window.localStorage || !window.sessionStorage) return;

  const tests = [];

  for (const key in localStorage) {
    if (key.indexOf('ab-test') !== -1) {
      tests.push({
        name: key,
        value: localStorage.getItem(key),
      });
    }
  }

  for (const key in sessionStorage) {
    if (key.indexOf('ab-test') !== -1) {
      tests.push({
        name: key,
        value: sessionStorage.getItem(key),
      });
    }
  }

  return tests;
};
