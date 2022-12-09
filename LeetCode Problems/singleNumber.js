var singleNumber = function(nums) {
    debugger;
    return nums.reduce(function(prev,curr){
        return curr ^= prev;
    })
};

const nums = [1,1,2,2,3,3,4];

console.log(singleNumber(nums));