// -------------------------------------------------------------
// Q1: Print a Solid Square of Stars
// Output for n=4:
// ****
// ****
// ****
// ****
let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*"; // add one star each time
  }
  console.log(row);
}

// -------------------------------------------------------------
// Q2: Print a Right-Angled Triangle of Stars
// Output for n=4:
// *
// **
// ***
// ****
n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*"; // add stars equal to row number
  }
  console.log(row);
}

// -------------------------------------------------------------
// Q3: Print Increasing Numbers in Each Row
// Output for n=5:
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
n = 5;

for (let i = 1; i <= n; i++) {
  let printNumInRow = "";
  for (let j = 1; j <= i; j++) {
    printNumInRow = printNumInRow + " " + j;
  }
  console.log(printNumInRow);
}

// -------------------------------------------------------------
// Q4: Print Row Number Repeated
// Output for n=5:
//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5
n = 5;

for (let i = 0; i < n; i++) {
  let printNumInRow = "";
  for (let j = 0; j <= i; j++) {
    printNumInRow = printNumInRow + " " + (i + 1);
  }
  console.log(printNumInRow);
}

// -------------------------------------------------------------
// Q5: Print Decreasing Number Triangle
// Output for n=5:
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1
n = 5;

// Method 1: Using i decreasing
for (let i = 5; i > 0; i--) {
  let printNumInRow = "";
  for (let j = 1; j <= i; j++) {
    printNumInRow = printNumInRow + " " + j;
  }
  console.log(printNumInRow);
}

// Method 2: Using n - i
for (let i = 0; i < n; i++) {
  let printRow = "";
  for (let j = 0; j < n - i; j++) {
    printRow = printRow + " " + (j + 1);
  }
  console.log(printRow);
}

// -------------------------------------------------------------
// Q6: Inverted Star Triangle
// Output for n=5:
//  *****
//  ****
//  ***
//  **
//  *
n = 5;

for (let i = 0; i < n; i++) {
  let printRow = "";
  for (let j = 0; j < n - i; j++) {
    printRow = printRow + " *";
  }
  console.log(printRow);
}

// -------------------------------------------------------------
// Q7: Right-Aligned Star Triangle
// Output for n=5:
//      *
//     **
//    ***
//   ****
//  *****
n = 5;

for (let i = 0; i < n; i++) {
  let printRow = " ";
  // Print spaces
  for (let j = 0; j < n - (i + 1); j++) {
    printRow = printRow + " ";
  }
  // Print stars
  for (let k = 0; k < i + 1; k++) {
    printRow = printRow + "*";
  }
  console.log(printRow);
}

// -------------------------------------------------------------
// Q8: Print Binary Triangle (Alternating 1s and 0s)
// Output for n=6:
//  1
//  0 1
//  0 1 0
//  1 0 1 0
//  1 0 1 0 1
//  0 1 0 1 0 1
n = 6;

for (let i = 0; i < n; i++) {
  let printNum = "";
  let switchNum = 1; // start with 1

  for (let j = 0; j < i + 1; j++) {
    printNum = printNum + " " + switchNum;

    // Toggle between 1 and 0
    if (switchNum == 1) {
      switchNum = 0;
    } else {
      switchNum = 1;
    }
  }
  console.log(printNum);
}
