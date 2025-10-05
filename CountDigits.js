// write a function that return the count of digits in a number

function countInDigits(n) {
  if (n == 0) return 1; // corner case 1
  n = Math.abs(n); // corner case 2

  // if(n)

  let count = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    console.log(lastDigit);
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

// corner case 1: what if num is zero (0)?
// let count = 0;
// corner case 2: what if num is negative (-)?
// let count = -343;
// corner case 3: what if num is so big?
let count = 342342349085899903;

// let count = 343;
console.log("The Total Count Digits is = " + countInDigits(count));
