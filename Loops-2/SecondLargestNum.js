// now we find second largest num in array

function secondLargestNum(arr) {
  if (arr.length < 2) {
    return null;
  }
  let largestNum = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargest = largestNum;
      largestNum = arr[i]; // but before this we update second largest
    } else if (arr[i] > secondLargest && arr[i] !== largestNum) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let arr = [4, 10, 5, 7, 8, 12, 12];
const result = secondLargestNum(arr);
console.log(result);
