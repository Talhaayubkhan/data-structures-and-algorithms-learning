function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    // calculate the middle
    let middle = Math.floor((left + right) / 2);

    if (target == arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 13;
console.log(`Element ${target} found at index:`, binarySearch(arr, target));
