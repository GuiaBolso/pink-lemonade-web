import { hexToRgb } from './hex-to-rgb';

describe(' PxToRem', () => {
  it('should be convert hex in rgb', () => {
    expect(hexToRgb('#222299')).toBe({ r: 34, g: 34, b: 153 });
  });
});
