// Problem: 2
// Count Negative numbers in array

// now we write function to count negative numbers in array
function countNegative(arr) {
  // we count that negative numbers, and save them in count varible later we return it!
  let count = 0;
  // now we use for loop to iterate through array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let arr = [3, -5, 7, -9, 11, -13, -15, 20];
const result = countNegative(arr);
console.log(result); // 3
