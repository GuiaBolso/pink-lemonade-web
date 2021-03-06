import React from 'react';

type Callback = () =>
  | void
  | Promise<void | (() => void | undefined)>
  | (() => void | undefined);

export const useDidUpdate = (
  callbackMount: Callback,
  when: ReadonlyArray<unknown>,
  unmount?: Callback,
) => {
  const mount = (): void | (() => void) => {
    const result = callbackMount();

    if (typeof result === 'function') {
      return result;
    }

    return unmount;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(mount, [when]);
};
