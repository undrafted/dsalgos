const printArray = (arr: number[]) => {
  console.log(arr.join(" "));
};

const bubbleSort = (arr: number[]): number[] => {
  let isSorted = false;
  // printArray(arr);

  // for every pass, the biggest number will go to the end of the array
  // so we can reduce the loop count on every pass
  let lastUnsorted = arr.length - 1;

  while (!isSorted) {
    printArray(arr);
    isSorted = true;

    for (let i = 0; i < lastUnsorted; i++) {
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
  return arr;
};

const arr = [5, 4, 2, 10, 12, 11, 1, 20, 5, 15, 1, 0, 25];
bubbleSort(arr);
