function sumInsideArray(n) {
  if (n == 0) return arr[n];

  return arr[n] + sumInsideArray(n - 1);
}

let arr = [5, 3, 2, 0, 1];

console.log(sumInsideArray(arr.length - 1));
