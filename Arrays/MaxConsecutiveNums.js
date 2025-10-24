// try to find max consecutive ones in an array

function findMaxConsecutiveOnes(nums) {
  // we take two counts
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    } else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }

  // we must check this max in last for worst case scenario
  return Math.max(maxCount, currCount);
}

let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
