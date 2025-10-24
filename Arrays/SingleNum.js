//  Approach 1: Using HashMap (Map)

function singleNum(nums) {
  //  TIME COMPLEXITY: O(n)
  //  SPACE COMPLEXITY: O(n) — storing counts in Map

  let hash = new Map(); //  Create a Map to store frequencies

  // Step 1: Count occurrences of each number
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }

  // Step 2: Find and return the number that appears only once
  for (let [key, value] of hash) {
    if (value === 1) {
      return key;
    }
  }
}

// Approach 2: Using Bitwise XOR

function returnSingleNumber(nums) {
  //  TIME COMPLEXITY: O(n)
  //  SPACE COMPLEXITY: O(1) — no extra memory used

  let xor = 0; // store XOR result

  // Step 1: XOR all numbers
  for (let i = 0; i < nums.length; i++) {
    //  XOR rules:
    //  - a ^ a = 0  (same numbers cancel out)
    //  - a ^ 0 = a  (0 has no effect)
    //  - XOR order doesn't matter
    xor = xor ^ nums[i];
  }

  // Step 2: Remaining value is the single number
  return xor;
}

// 🧠 Example Test

let nums = [4, 2, 1, 2, 1];

// ✅ Using Map
console.log("Using Map:", singleNum(nums)); // Output: 4

// ✅ Using Bitwise XOR
console.log("Using XOR:", returnSingleNumber(nums)); // Output: 4
