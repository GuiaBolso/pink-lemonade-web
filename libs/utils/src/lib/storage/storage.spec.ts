import { createStorage } from './storage';

describe('storage', () => {
  const key = 'my-key';
  const obj = { a: 1 };
  const objString = JSON.stringify(obj);
  const num = 123;
  const numStr = String(num);

  const store = {};
  const StorageMock = () => {
    return {
      getItem: _key => store[_key],
      setItem: (_key, value) => {
        store[_key] = value.toString();
      },
      removeItem: _key => delete store[_key],
      store,
    };
  };

  const _memoryStorage = StorageMock();
  Object.defineProperty(window, 'memoryStorage', {
    value: _memoryStorage,
  });

  describe('localStorage', () => {
    const _localStorage = StorageMock();
    Object.defineProperty(window, 'localStorage', {
      value: _localStorage,
    });

    const local = createStorage('local');

    it('should be set item', () => {
      local.setItem(key, obj);

      expect(store[key]).toBe(objString);
    });

    it('should be get item', () => {
      expect(store[key]).toBe(objString);
      expect(local.getItem(key)).toEqual(obj);
    });

    it('should be remove item', () => {
      local.removeItem(key);
      expect(store[key]).toBe(undefined);
      expect(local.getItem(key)).toBe('');
    });
  });

  describe('sessionStorage', () => {
    const _sessionStorage = StorageMock();
    Object.defineProperty(window, 'sessionStorage', {
      value: _sessionStorage,
    });

    const session = createStorage('session');

    it('should be set item', () => {
      session.setItem(key, num);

      expect(store[key]).toBe(numStr);
    });

    it('should be get item', () => {
      expect(store[key]).toBe(numStr);
      expect(session.getItem(key)).toEqual(numStr);
    });

    it('should be remove item', () => {
      session.removeItem(key);
      expect(store[key]).toBe(undefined);
      expect(session.getItem(key)).toBe('');
    });
  });

  describe('memory', () => {
    const memory = createStorage('memory');

    it('should be set item', () => {
      memory.setItem(key, num);

      expect(memory.getItem(key)).toBe(numStr);
    });

    it('should be get item', () => {
      expect(memory.getItem(key)).toEqual(numStr);
    });

    it('should be remove item', () => {
      memory.removeItem(key);
      expect(memory.getItem(key)).toBe('');
    });
  });

  describe('should be set fallback memory', () => {
    Object.defineProperty(window, 'localStorage', {
      value: undefined,
    });

    Object.defineProperty(window, 'sessionStorage', {
      value: undefined,
    });

    it('should be set item', () => {
      const local = createStorage('local');
      const session = createStorage('session');
      const unknow = createStorage('unknow' as 'session');

      local.setItem(key, num);
      session.setItem(key, num);
      unknow.setItem(key, num);

      expect(local.getItem(key)).toBe(numStr);
      expect(session.getItem(key)).toBe(numStr);
      expect(unknow.getItem(key)).toBe(numStr);
    });
  });
});
