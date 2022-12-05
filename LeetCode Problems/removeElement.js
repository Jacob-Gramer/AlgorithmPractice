var removeElement = function(nums, val) {
    // iterate over nums
    let i = 0;
    while (i <= nums.length) {
        // if nums[i] is equal to val, remove nums[i]
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums
};

const nums = [3,2,2,3,5,7,7,7,3,87,9,4,5];
const val = 5;
console.log(removeElement(nums, val));