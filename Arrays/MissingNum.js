// ✅ Function to find the missing number in an array
// The array should contain numbers from 0 to n, but one is missing
function missingNumber(nums) {
  // n = length of array (not the last number)
  let n = nums.length;

  // 💡 totalSum = expected sum of numbers from 0 to n
  // Using formula: n * (n + 1) / 2
  // This represents the "complete" sum if no number was missing
  let totalSum = (n * (n + 1)) / 2;

  // partialSum = actual sum of the given array
  let partialSum = 0;

  // 🔁 Loop through the array to calculate actual sum
  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }

  // 🧠 The difference between totalSum and partialSum
  // will give us the missing number
  return totalSum - partialSum;
}

// Example array where one number (2) is missing
const nums = [3, 0, 1];

// 🖨️ Output: 2
console.log("The Missing Number is:", missingNumber(nums));
