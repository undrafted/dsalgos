export const printArray = (arr: number[]) => {
  console.log(arr.join(" "));
};

// https://www.youtube.com/watch?v=6Gv8vg0kcHc
const bubbleSort = (arr: number[]): number[] => {
  printArray(arr);

  let isSorted = false;
  let iterationsCount = 0;
  // for every pass, the biggest number will go to the end of the array
  // so we can reduce the loop count on every pass
  let lastUnsorted = arr.length - 1;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < lastUnsorted; i++) {
      iterationsCount += 1;

      if (arr[i] > arr[i + 1]) {
        isSorted = false;
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }

    lastUnsorted -= 1;
  }

  printArray(arr);
  console.log("iteration count: ", iterationsCount);
  return arr;
};

const arr = [5, 4, 2, 10, 12, 11, 1, 20, 5, 15, 1, 0, 25];
bubbleSort(arr);
