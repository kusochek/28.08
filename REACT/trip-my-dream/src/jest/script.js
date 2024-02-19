export const sum = (a, b) => a + b;

export const tooltip = (value = 'Hello World!') => `${value} Success!`;

export const concatArr = (arr1, arr2 = [1, 2]) => {
  if (arr1) {
    return arr1.concat(arr2);
  }

  return arr2;
};
