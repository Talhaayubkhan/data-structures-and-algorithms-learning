// Write a function to reverse the characters of a string (given as an array)
function reverseString(s) {
  // Get the total length of the array
  let arrLength = s.length;

  // We only need to go through half of the array
  // because we swap two elements at a time (start ↔ end)
  let halfArr = Math.floor(arrLength / 2);

  // Loop through the first half of the array
  for (let i = 0; i < halfArr; i++) {
    // Save the current element (at start)
    let temp = s[i];
    // Swap the current element with its mirror element from the end
    s[i] = s[arrLength - 1 - i];
    s[arrLength - 1 - i] = temp;
  }

  // Return the reversed array
  return s;
}

// Example array of characters
let s = ["h", "e", "l", "l", "o"];

// Print the reversed array
console.log(reverseString(s)); // Output: ["o", "l", "l", "e", "h"]
