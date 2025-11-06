// Time Complexity: O(n)
// Space Complexity: O(1)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let arr = [3, 2, 1, 4, 5, 9, 10, 15];
let target = 2;

console.log(`Element ${target} found at index:`, linearSearch(arr, target));
