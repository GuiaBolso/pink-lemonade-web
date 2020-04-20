import { pxToRem } from './px-to-rem';

describe(' PxToRem', () => {
  it('should be convert px in rem', () => {
    const sizePxBase = 16;

    expect(pxToRem(1, sizePxBase)).toBe('0.0625rem');
    expect(pxToRem(10, sizePxBase)).toBe('0.625rem');
    expect(pxToRem(16, sizePxBase)).toBe('1rem');
    expect(pxToRem(18, sizePxBase)).toBe('1.125rem');

    const sizePxBaseTwo = 18;

    expect(pxToRem(12, sizePxBaseTwo)).toBe('0.6666rem');
    expect(pxToRem(18, sizePxBaseTwo)).toBe('1rem');
    expect(pxToRem(24, sizePxBaseTwo)).toBe('1.3333rem');
    expect(pxToRem(72, sizePxBaseTwo)).toBe('4rem');
  });
});
