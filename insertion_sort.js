/*
Step 1: Start with the second element (index 1) of the array. This element is considered as the "key" element.

Step 2: Compare the key element with the previous element (element at index i - 1), and if the key element is smaller, move the previous element one position ahead to make space for the key element.

Step 3: Repeat Step 2 until the key element is no longer smaller than the previous element or until you reach the beginning of the array.

Step 4: Place the key element in the correct position in the sorted part of the array.

Step 5: Move to the next unsorted element (increase i by 1) and repeat Steps 2-4 until all elements are in their correct positions.
*/
function insertionSort(arr) {
  const n = arr.length;
  
  for (let i = 1; i < n; i++) {
    const key = arr[i]; // Current element to be inserted into the sorted part
    let j = i - 1; // Index of the last element in the sorted part
    
    // Move elements of sorted part that are greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Place the key element in its correct position
    arr[j + 1] = key;
  }
  
  return arr;
}

// Example usage
const unsortedArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
