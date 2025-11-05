function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

let n = 20;
console.log(`Fibonacci of ${n} is:`, fib(n));

// This code defines a recursive function `fib` that calculates the nth Fibonacci number.
// The base cases are when n is 0 or 1, returning n directly. For other values, it recursively
// calls itself to compute the sum of the two preceding Fibonacci numbers.
