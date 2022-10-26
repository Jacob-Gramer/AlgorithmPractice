var isPalindrome = function(x: number) {
  let nums = String(x);
  for (let i=0; i<nums.length; i++) {
      if (nums[i] !== nums[nums.length - (i+1)]) return false;
  }
  return true;
};