function bubbleSort(arr) {
  const n = arr.length - 1;  // array memory allocation starts from 0

  for(let i=0; i<n; i++) {
    for (let j=0; j<n-1; j++) {
      if(arr[j] < arr[j+1]) {
        // Swap the elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
      }
    }
  }
}

const array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array); // [11, 12, 22, 25, 34, 64, 90]
