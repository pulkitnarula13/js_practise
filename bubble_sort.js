/*
Step 1: Start from the beginning of the array.

Step 2: Compare the current element with the next element. If the current element is larger than the next element, swap them.

Step 3: Move to the next pair of elements and repeat Step 2.

Step 4: After completing one pass through the array, the largest element will have "bubbled up" to the end of the array. Repeat Steps 1-3 for the remaining unsorted part of the array (excluding the already sorted elements at the end).

Step 5: Continue repeating Steps 1-4 until no more swaps are needed in a full pass through the array. This indicates that the array is sorted.
*/
function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    // The inner loop runs from the beginning of the array to (n - i - 1),
    // since the last i elements are already in their correct positions
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements and swap if necessary
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
