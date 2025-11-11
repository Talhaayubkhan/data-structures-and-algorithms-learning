// bubble sort is little bit tricky when is come to go via loop
// 1) First Loop Is go from 0 TO n-1 means 0 to 3 - this called iteration
// 2) Second Inner Loop go from inside on each elements - for each swaping elements

// TIME COMPLEXITY HERE IS 0(N^2) IN WORST CASE
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwaped = false;
    // inner loop through each element to swap them
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap relevent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwaped = true;
      }
    }

    if (!isSwaped) break;
  }
  return arr;
}

let arr = [5, 2, 4, 3, 1];
console.log("Original Array:", arr);

console.log("Sorted Array ", bubbleSort(arr));
