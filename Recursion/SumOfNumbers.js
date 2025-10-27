// sum of all numbers in array!

function sumOfNumbers(n) {
  // the base case
  if (n == 0) return arr[n];

  return arr[n] + sumOfNumbers(n - 1);
}

let arr = [5, 3, 2, 0, 1];
console.log("The sum of Numbers = " + sumOfNumbers(arr.length - 1)); // Output: 11
