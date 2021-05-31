import { local, session } from '../storage';
const sessionKeys = [];
const localKeys = [];

export const setABTest = (
  name: string,
  value: string,
  storage: 'localStorage' | 'sessionStorage' = 'localStorage',
) => {
  if (storage === 'sessionStorage') {
    const key = `ab-test-${name}`;
    sessionKeys.push(key);

    return session.setItem(key, value);
  }

  const key = `ab-test-${name}`;
  localKeys.push(key);

  return local.setItem(key, value);
};

export const getABTestValue = (name: string) => {
  return (
    local.getItem(`ab-test-${name}`) ||
    local.getItem(name) ||
    session.getItem(`ab-test-${name}`) ||
    session.getItem(name)
  );
};

export const getAllABTestValues = ():
  | []
  | { name: string; value: string }[] => [
  ...sessionKeys.map(session.getItem),
  ...localKeys.map(local.getItem),
];
