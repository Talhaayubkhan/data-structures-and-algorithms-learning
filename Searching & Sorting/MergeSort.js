// Merge Sort implementation

// Overall time complexity: O(n log n)
// Overall space complexity: O(n)
function mergeSort(arr) {
  // Base case: array of size 0 or 1 is already sorted
  if (arr.length <= 1) return arr;

  // Divide the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Conquer: merge both sorted halves
  return mergeTwoArr(left, right);
}

// Merging two sorted arrays
// Time complexity: O(n) where n = left.length + right.length
function mergeTwoArr(left, right) {
  // Temporary array to store the merged output
  let result = [];

  // Pointers for both arrays
  let i = 0;
  let j = 0;

  // Iterate and merge the smaller values first
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from left or right
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Example usage
let arr = [8, 4, 5, 6, 9, 1, 3, 10];
console.log("Before:", arr);
console.log("After:", mergeSort(arr));
