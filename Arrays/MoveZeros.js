// 🔹 Move all zeros in the array to the end while maintaining the order of non-zero elements
function moveZeroToTheEnd(nums) {
  // j will track the index where the next non-zero element should be placed
  let j = 0;

  // 🔸 First loop: Move all non-zero elements to the front (in their original order)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Copy the non-zero element to position j
      nums[j] = nums[i];
      j++; // Move j to the next available position
    }
  }

  // 🔸 Second loop: Fill the remaining positions (from j to end) with zeros
  // Because after first loop, all non-zero elements are placed correctly at the start
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// 🧪 Example usage
let nums = [0, 1, 0, 3, 12];

console.log("Before moving zeros: " + nums);

// Call the function to rearrange zeros
moveZeroToTheEnd(nums);

console.log("After moving zeros to the end: " + nums);
