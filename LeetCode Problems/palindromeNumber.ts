
// this version of the function iterates over the stringified number and tests the equality of the opposite indexes
var isPalindrome = function(x: number) {
  let nums = String(x);
  for (let i=0; i<nums.length; i++) {
      if (nums[i] !== nums[nums.length - (i+1)]) return false;
  }
  return true;
};
