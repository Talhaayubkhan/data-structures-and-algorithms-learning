// Problem: 3

// now we find the smallest number in array

function smallestNum(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [3, -5, -1, 7, 9, 110, 13, 15];
const result = smallestNum(arr);
console.log(result); // -5
