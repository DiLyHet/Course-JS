import { withdraw } from './withdraw.js'

  it('should get if client have not anought money', () => {
    const result = withdraw(['Alice', 'John', 'Ann'], [999, 5000, 1000], 'Alice', 1000);

    expect(result).toEqual(-1);
  });

  it('should get if client have a lot of money', () => {
    const result = withdraw(['Alice', 'John', 'Ann'], [999, 5000, 1000], 'John', 1000);

    expect(result).toEqual(4000);
  });

  it('should get if client have money', () => {
    const result = withdraw(['Alice', 'John', 'Ann'], [999, 5000, 1000], 'Ann', 1000);

    expect(result).toEqual(0);
  });