import { strict as assert } from "assert";

// Quick sort is another "divide and conquer" algorithm,
// calling itself recursively to sort our list.
// With quick sort, we pick an index of our array to be the "pivot".
// Every item is compared to the pivot,
// and pushed into a left or right array depending on that comparison.
// Quick sort is then called on these left and right arrays.

const quickSort = (arr: number[]): number[] => {
  console.log(arr);
  if (arr.length < 2) {
    return arr;
  }

  const pivotIndex = arr.length - 1;
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = arr[i];
    currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
  }

  const result = [...quickSort(left), pivot, ...quickSort(right)];
  console.log("sorted: ", result);
  return result;
};

const arr = [10, 5, 2, 1, 4, 3, 7, 9, 8, 6];
console.log(quickSort(arr));
assert.deepEqual(quickSort(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
