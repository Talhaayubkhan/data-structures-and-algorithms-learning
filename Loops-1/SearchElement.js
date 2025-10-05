//  Problem: 1
// Search For an element in array and return his index if find it else return -1

// now we write function to search element in array

function searchElement(arr, target) {
  // now we use for loop to iterate through array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      // return the index
      return i;
    }
  }

  // if element not found return -1
  return -1;
}

let arr = [3, 5, 7, 9, 11, 13, 15];
const result = searchElement(arr, 3);
console.log(result); // 0
