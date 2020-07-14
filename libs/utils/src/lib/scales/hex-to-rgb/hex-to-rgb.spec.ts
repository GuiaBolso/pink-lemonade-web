import { hexToRgb } from './hex-to-rgb';

describe(' PxToRem', () => {
  it('should be convert hex in rgb', () => {
    const color = hexToRgb('#222299');
    expect(color.r).toBe(34);
    expect(color.g).toBe(34);
    expect(color.b).toBe(153);
  });
});
