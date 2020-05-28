/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Get last value of array
 */
export const getLastValue = (array: any[]) => {
  let value: any;

  for (value of array);
  return value;
};
