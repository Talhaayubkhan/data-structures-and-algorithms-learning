// Problem: 3

// now we find the largest number in array

function largestNum(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [3, 5, 7, 9, 11, 13, 15];
const result = largestNum(arr);
console.log(result); // 15
