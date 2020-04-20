/**
 * Convert px to rem
 */
export const pxToRem = (
  /** value px value */
  value: number,
  /** base base px value. Default value 16 */
  base = 16,
): string => `${String(value / base).substring(0, 6)}rem`;
