/**
 * Convert px to rem
 *
 * @param {number} value px value. (Ex: 20)
 * @param {number} base base px value. (Ex: 16)
 * @returns {string} return rem value
 */
const pxToRem = (value: number, base = 16): string => `${value / base}rem`;

export default pxToRem;
