import { createId } from './create-id';

describe('CreateId', () => {
  it('should be create a uniq id', () => {
    const id1 = createId();
    const id2 = createId();

    expect(id1).not.toBe(id2);
  });
});
