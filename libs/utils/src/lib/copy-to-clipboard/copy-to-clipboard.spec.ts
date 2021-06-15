// https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/__tests__/copy-to-clipboard.js

import { copyToClipboard } from './copy-to-clipboard';

beforeEach(() => {
  // @ts-ignore
  globalThis.navigator.clipboard = {
    writeText: jest.fn(),
  };

  document.execCommand = jest.fn();
  document.createRange = jest.fn();
  globalThis.getSelection = jest.fn();
  // @ts-ignore
  globalThis.getSelection = jest.fn(() => {
    return {
      removeAllRanges: jest.fn(),
      addRange: jest.fn(),
    };
  });
});

test('it uses writeText API, by default', async () => {
  const str = 'waddup';
  await copyToClipboard(str);

  expect(globalThis.navigator.clipboard.writeText).toHaveBeenCalledWith(str);
});

test('it falls back to execCommand, if writeText is not defined', async () => {
  // @ts-ignore
  globalThis.navigator.clipboard = {};

  await copyToClipboard('sup');

  expect(document.execCommand).toHaveBeenCalledWith('copy');
  expect(document.execCommand).toHaveBeenCalledTimes(1);
});
