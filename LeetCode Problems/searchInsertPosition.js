
var searchInsert = function(nums, target) {
    debugger;
    var left = 0;
    var right = nums.length - 1;
    while(left <= right){
        var mid = Math.floor((right + left)/2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] > target){
            right = mid - 1;
        }
        if(nums[mid] < target){
            left = mid + 1;
        }
    }
    return left;
};

nums = [1,3,5,6];
target = 7;

console.log(searchInsert(nums, target))