let singleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let repeated = null;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == nums[i + 1]) {
      i = i + 2;
    } else {
      return nums[i];
    }
  }
};
