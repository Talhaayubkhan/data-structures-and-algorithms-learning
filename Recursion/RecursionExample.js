// print n to 1

function printNums(nums) {
  if (nums == 0) return;

  console.log(nums);
  nums = nums - 1;
  printNums(nums);
}
let nums = 5;

function printNums2(x) {
  if (x > nums) return;

  console.log(x);
  printNums2(++x);
}

let x = 1;
printNums2(x);
