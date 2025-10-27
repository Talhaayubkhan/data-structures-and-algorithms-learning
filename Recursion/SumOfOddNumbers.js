//  Function to find the sum of all odd numbers in an array using recursion
function sumOfOddNum(n) {
  //  Step 1: Check whether the current element is odd or even
  let isOdd = arr[n] % 2 != 0;

  //  Step 2: Base Case — when we reach the first element (index 0)
  // If it's odd, return its value; otherwise, return 0
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }

  //  Step 3: Recursive Case
  // If the current element is odd → add it to the sum of remaining elements
  if (isOdd) {
    return arr[n] + sumOfOddNum(n - 1);
  }
  // If the current element is even → add nothing (0) and move backward
  else {
    return 0 + sumOfOddNum(n - 1);
  }
}

// 🔹 Example Array
let arr = [6, 3, 9, 0, 1, 7, 10];

//  Step 4: Start recursion from the last index of the array
// Here, we expect the sum of all odd numbers → 3 + 9 + 1 + 7 = 20
console.log("The Sum of Odd Numbers is = " + sumOfOddNum(arr.length - 1));
