// 🧩 Problem: Remove all occurrences of a given value from an array (in-place)
// We will use the "two-pointer approach" — similar logic as in removing duplicates.

function removeElements(nums, val) {
  // Pointer x will keep track of the position where the next "valid" element should go.
  let x = 0;

  // Loop through all elements of the array using i
  for (let i = 0; i < nums.length; i++) {
    // If the current element is NOT equal to the value we want to remove
    if (nums[i] !== val) {
      // Copy this valid element to the position pointed by x
      nums[x] = nums[i];

      // Move pointer x one step forward for the next valid element
      x = x + 1;
    }
    // If nums[i] === val, we simply skip it (don’t copy it)
  }

  // At the end of the loop:
  // - All valid elements (not equal to val) are moved to the front part of the array
  // - 'x' represents how many valid elements are left
  return x;
}

// Example Input
let nums = [3, 2, 2, 3, 5, 3, 10, 3, 15];
let val = 3;

// Output the count of remaining elements after removing 'val'
console.log("The total elements after removing =", removeElements(nums, val));

// ⚙️ Explanation:
// Original: [3, 2, 2, 3], val = 3
// After process: [2, 2, _, _]
// x = 2 → means two elements left that are not equal to 3.
