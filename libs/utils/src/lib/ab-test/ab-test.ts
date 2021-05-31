import { local, session } from '../storage';
const sessionKeys = [];
const localKeys = [];

export const setABTest = (
  name: string,
  value: string,
  storage: 'localStorage' | 'sessionStorage' = 'localStorage',
) => {
  const key = `ab-test-${name}`;
  if (storage === 'sessionStorage') {
    sessionKeys.push(key);

    return session.setItem(key, value);
  }

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
