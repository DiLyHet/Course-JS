import { getAdults } from './getAdults.js'

  it('should get adult peoples', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
  });

  it('should checking for adult', () => {
    const result = getAdults({ 'John Doe': 15, Tom: 17, Bob: 7 });

    expect(result).toEqual({});
  });

  it('should get empty object', () => {
    const result = getAdults({ 'John Doe': undefined, Tom: undefined, Bob: undefined });

    expect(result).toEqual({});
  });