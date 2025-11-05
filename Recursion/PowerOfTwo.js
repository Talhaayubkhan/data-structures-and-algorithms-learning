function isPowerOfTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}

let num = 16;
console.log(`${num} is power of two:`, isPowerOfTwo(num));
