import { getMinSquaredNumber } from './getMinSquaredNumber.js'

  it('should checking that array is array', () => {
    const result = getMinSquaredNumber('-5, 10, 56, -143, -2');

    expect(result).toEqual(null);
  });

  it('should checking that array is not empty', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
  });

  it('should get minimal squared number in array', () => {
    const result = getMinSquaredNumber([-5, 10, 56, -143, -2]);

    expect(result).toEqual(4);
  });