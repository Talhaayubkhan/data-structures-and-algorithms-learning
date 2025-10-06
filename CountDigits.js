// ✅ Problem: Write a function that returns the count of digits in a number
function countInDigits(n) {
  // Case 1️⃣: if the number is exactly 0, it has 1 digit
  if (n == 0) return 1;

  // Case 2️⃣: if the number is negative, make it positive
  // Because -234 and 234 both have the same number of digits
  n = Math.abs(n);

  // Initialize count variable to track total digits
  let count = 0;

  // Repeat until number becomes 0
  while (n > 0) {
    // Remove the last digit each time
    n = Math.floor(n / 10);

    // Increase digit count
    count++;
  }

  // Return the total digits found
  return count;
}

// Try different test numbers
// let countNum = 0;      // Test 1: zero case
// let countNum = 1234;   // Test 2: normal positive number
let countNum = -234; // Test 3: negative number

// Print result
console.log(
  `The count of digits in ${countNum} is: ${countInDigits(countNum)}`
);
