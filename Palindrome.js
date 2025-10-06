// ✅ Problem: Check whether a number is palindrome or not
function isPalindrome(n) {
  // Store the original number
  // Because we will destroy (divide) n while reversing it
  let originalNumCopy = n;

  // Variable to store reversed number
  let revNum = 0;

  // Reverse the number digit by digit
  while (n > 0) {
    // Step 1️⃣: Get the last digit
    let rem = n % 10;

    // Step 2️⃣: Add it to reversed number
    // (Shift old digits left and add new digit at the end)
    revNum = revNum * 10 + rem;

    // Step 3️⃣: Remove the last digit from n
    n = Math.floor(n / 10);
  }

  // Compare reversed number with original
  // If both same → palindrome
  return revNum == originalNumCopy;
}

// Try different numbers
let isPalindromeNum = 121; // Try 121, 1221, 343 to test

// Print result
console.log(
  `Is ${isPalindromeNum} a palindrome? ${isPalindrome(isPalindromeNum)}`
);
