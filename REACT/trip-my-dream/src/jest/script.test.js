import { concatArr, sum, tooltip } from './script';

test('sum should return correct value', () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});

describe('tooltip', () => {
  it('should return correct value without pass argument', () => {
    const result = tooltip();

    expect(result).toBe('Hello World! Success!');
  });

  it('should return correct value if have argument', () => {
    const result = tooltip('Success');

    expect(result).toBe('Success Success!');
  });
});

describe('concatArr', () => {
  const arr1 = ['a', 'b', 'c'];
  const arr2 = [100, 200, 300];

  it('should return correct value', () => {
    const result = concatArr(arr1, arr2);

    expect(result).toEqual(['a', 'b', 'c', 100, 200, 300]);
  });

  it('should return correct value if do not pass arr1', () => {
    const result = concatArr(undefined, arr2);

    expect(result).toEqual([100, 200, 300]);
  });

  it('should return correct value with default value arr2', () => {
    const result = concatArr(arr1);

    expect(result).toEqual(['a', 'b', 'c', 1, 2]);
  });
});
