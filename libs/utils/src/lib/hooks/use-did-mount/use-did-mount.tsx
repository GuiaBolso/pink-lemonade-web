import React from 'react';

type Callback = () =>
  | void
  | Promise<void | (() => void | undefined)>
  | (() => void | undefined);

export const useDidMount = (callbackMount: Callback, unmount?: Callback) => {
  const mount = (): void | (() => void) => {
    const result = callbackMount();

    if (typeof result === 'function') {
      return result;
    }

    return unmount;
  };

  React.useEffect(mount, [callbackMount, unmount]);
};
