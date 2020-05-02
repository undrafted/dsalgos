import { strict as assert } from "assert";

const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]): number[] => {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // push left's first element to sorted, then remove it
      sorted.push(left.shift());
    } else {
      // push right's element to sorted, then remove it
      sorted.push(right.shift());
    }
  }

  // spread left and right too for cases where left is empty and right is not and vice versa
  const result = [...sorted, ...left, ...right];
  console.log(result);
  return result;
};

const arr = [10, 5, 2, 1, 4, 3, 7, 9, 8, 6];
console.log(arr);
console.log(mergeSort(arr));

assert.deepEqual(mergeSort(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
