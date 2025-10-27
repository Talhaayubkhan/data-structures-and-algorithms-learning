function factorial(n) {
  if (n == 1) return 1;

  return n * factorial(n - 1);
}

let n = 5;
console.log(`the factorial of ${n} is = ` + factorial(n)); // Output: 120
