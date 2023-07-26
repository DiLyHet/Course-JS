import { reverseArray } from './reverseArray.js'

  it('should checking that array is not a number', () => {
    const result = reverseArray(648, 45, 908);

    expect(result).toEqual(null);
  });

  it('should checking that array is not a string', () => {
    const result = reverseArray('648, 45, 908');

    expect(result).toEqual(null);
  });

  it('should get reversing array', () => {
    const result = reverseArray([648, 45, 908]);

    expect(result).toEqual([908, 45, 648]);
  });