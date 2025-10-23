// // 🔹 Merge two sorted arrays into nums1 (which has extra space for nums2)
// function mergeArrays(nums1, m, nums2, n) {
//   // ✅ Create a copy of the valid portion of nums1 (ignore the trailing zeros)
//   let n1Copy = nums1.slice(0, m);

//   // Initialize two pointers:
//   // p1 for traversing n1Copy, and p2 for traversing nums2
//   let p1 = 0;
//   let p2 = 0;

//   // Loop through the total length (m + n) since final array has m+n elements
//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && n1Copy[p1] <= nums2[p2])) {
//       //  Case 1: Take from n1Copy
//       nums1[i] = n1Copy[p1]; // Place its value into nums1
//       p1++; // Move pointer p1 forward
//     } else {
//       //  Case 2: Take from nums2
//       nums1[i] = nums2[p2]; // Place its value into nums1
//       p2++; // Move pointer p2 forward
//     }
//   }
// }

// // 🧪 Example usage
// let nums1 = [1, 2, 3, 0, 0, 0]; // nums1 has extra 0s as space for nums2
// let m = 3; // valid elements in nums1
// let nums2 = [2, 5, 6];
// let n = 3; // total elements in nums2

// mergeArrays(nums1, m, nums2, n);

// console.log(nums1); // ✅ Output: [1, 2, 2, 3, 5, 6]

// TC -> O(n + m)
// SC -> O(m);

// better approach

function mergeSortedArrays(nums1, m, nums2, n) {
  // two pointer first define becuse we gp in reverse
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    // corner case
    if (p2 < 0) break;
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

mergeSortedArrays(nums1, m, nums2, n);

console.log(nums1);
