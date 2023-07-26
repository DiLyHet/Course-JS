import { calc } from './calculator.js'

  it('should checking operation +', () => {
    const result = calc('6 + 5');

    expect(result).toEqual('6 + 5 = 11');
  });

  it('should checking operation -', () => {
    const result = calc('6 - 5');

    expect(result).toEqual('6 - 5 = 1');
  });

  it('should checking operation *', () => {
    const result = calc('6 * 5');

    expect(result).toEqual('6 * 5 = 30');
  });

  it('should checking operation /', () => {
    const result = calc('10 / 5');

    expect(result).toEqual('10 / 5 = 2');
  });

  it('should checking that string is string', () => {
    const result = calc([4 + 5]);

    expect(result).toEqual(null);
  });