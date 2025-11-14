// In Selection Sort We First Find Minimum? then Swap those relvent element

// TC -> in worst case 0(n^2)

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i; // Assume current position has minimum

    // INNER LOOP: Only finds the index of minimum element
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j; // Just update the INDEX, don't swap yet
      }
    }
    // if same elements swap himself so don't
    if (min != i) {
      // OUTER LOOP: Perform the actual swap
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let arr = [7, 1, 5, 4, 3, 2];
console.log("Original Array:", arr);
console.log("Sorted Array:", selectionSort(arr));
