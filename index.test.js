it('17 === 17', () => {
    expect(17).toEqual(17);
  });
  
  it('17 !== 18', () => {
    expect(17).not.toEqual(18);
  });

  import { getEvenNumbers } from './index.js'

  it('should keep even numbers only', () => {
    const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);

    expect(result).toEqual([2, 4, 6]);
  });