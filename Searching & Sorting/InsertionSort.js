// Time Complexity: O(n^2) in the worst case
// Space Complexity: O(1) — In-place sorting algorithm

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // The element to be inserted into the sorted portion
    const currentValue = arr[i];

    // Index of the last element in the sorted portion
    let sortedIndex = i - 1;

    // Shift all elements greater than 'currentValue' one position to the right
    while (sortedIndex >= 0 && arr[sortedIndex] > currentValue) {
      arr[sortedIndex + 1] = arr[sortedIndex];
      sortedIndex--;
    }

    // Insert 'currentValue' into its correct position
    arr[sortedIndex + 1] = currentValue;
  }

  return arr;
}

// Example usage
const arr = [7, 4, 3, 5, 1, 2];
console.log("Original Array:", arr);
console.log("After Sorting:", insertionSort(arr));
