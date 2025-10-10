// 🧩 Problem: Remove duplicates from a sorted array
// Using the "two-pointer approach" — one pointer tracks the position of unique elements.

function removeDuplicates(nums) {
  // Pointer x marks the last position of a unique element.
  let x = 0;

  // Loop through every element of the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element (nums[i]) is greater than nums[x]
    // Since array is sorted, any greater element means it's a new unique number.
    if (nums[i] > nums[x]) {
      // Move pointer x one step forward to place the new unique number.
      x = x + 1;

      // Replace the duplicate value at new position x with this new unique value.
      nums[x] = nums[i];
    }
  }

  // Return the count of unique elements.
  // x is the index, so total unique count = x + 1.
  return x + 1;
}

// Example input: sorted array with duplicates
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Output the count of unique elements
console.log(
  `The number of unique elements in array = ${removeDuplicates(nums)}`
);
