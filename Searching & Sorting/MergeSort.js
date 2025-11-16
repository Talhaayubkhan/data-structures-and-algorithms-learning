// Merge Sort implementation

function mergeSort(arr) {
  // If array has 0 or 1 element, it's already sorted
  if (arr.length <= 1) return arr;

  // Split array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Merge the two sorted halves
  return mergeTwoArr(left, right);
}

function mergeTwoArr(left, right) {
  // Temporary array for storing merged result
  let result = [];

  // Pointers for both arrays
  let i = 0;
  let j = 0;

  // Compare values from both arrays and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements
  return [...result, ...left.slice(i), ...right.slice(j)];
}

let arr = [8, 4, 5, 6, 9, 1, 3, 10];
console.log("Before:", arr);
console.log("After:", mergeSort(arr));
