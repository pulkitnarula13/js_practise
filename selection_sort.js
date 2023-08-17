/*
Step 1: Find the minimum element in the unsorted part of the array.

Step 2: Swap the minimum element with the first element of the unsorted part.

Step 3: Move the boundary between the sorted and unsorted parts one step to the right (increase the index of the first element of the unsorted part).

Step 4: Repeat Steps 1-3 until the entire array is sorted.
*/
function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume the current index has the minimum value
    
    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the minimum element with the first element of the unsorted part
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  
  return arr;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
