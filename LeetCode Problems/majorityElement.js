var majorityElement = function(nums) {
    let curr = nums[0], count = 1;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] !== curr) {
            if (count > 0) count --;
            else {
                curr = nums[i];
                count++;
            }
        } else {
            count++;
        }
    }
    return curr;
};