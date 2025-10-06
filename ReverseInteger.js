// ✅ Problem: Write a function that reverses an integer (works for both + and - numbers)

function reverseInteger(num) {
  // Step 1️⃣: Keep a copy of the original number
  // Because we'll lose the original after dividing it in the loop
  const originalNum = num;

  // Step 2️⃣: Make the number positive (absolute value)
  // We only reverse digits — sign will be added back later
  num = Math.abs(num);

  // Step 3️⃣: Variable to store the reversed number
  let reversedNum = 0;

  // Step 4️⃣: Extract and build digits one by one
  while (num > 0) {
    const lastDigit = num % 10; // Get the last digit
    reversedNum = reversedNum * 10 + lastDigit; // Add last digit to reversed number
    num = Math.floor(num / 10); // Remove the last digit
  }

  // if num is to large -> from -2^32 to 2^32 -1;

  let limit = Math.pow(2, 31);
  if (reversedNum < -limit || reversedNum > limit - 1) return 0;

  // Step 5️⃣: If original number was negative → make result negative again
  return originalNum < 0 ? -reversedNum : reversedNum;
}
// For Positive
const number = 8332;
// For Negative
// const number = -9831;
console.log(`The reverse of ${number} is: ${reverseInteger(number)}`);
