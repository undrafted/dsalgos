export const printArray = (arr: number[]) => {
  console.log(arr.join(" "));
};

// https://www.youtube.com/watch?v=lCzQvQr8Utw
const insertionSort = (arr: number[]): number[] => {
  printArray(arr);
  let iterationCount = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      iterationCount += 1;
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  printArray(arr);
  console.log("Iteration count: ", iterationCount);
  return arr;
};

const arr = [5, 4, 2, 10, 12, 11, 1, 20, 5, 15, 1, 0, 25];
insertionSort(arr);
