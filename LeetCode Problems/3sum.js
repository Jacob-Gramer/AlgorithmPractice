var threeSum = function(nums) {
    debugger;
    let result = [];
    sort = nums.sort((a,b) => a-b);
    for (let i=0; i<sort.length - 2; i++) {
        if (i > 0 && sort[i] === sort[i-1]) continue;

        for (let j=i+1, k=sort.length-1; j<k;) {
            let sum = sort[i] + sort[j] + sort[k];
            if (sum === 0) {
                result.push([sort[i], sort[j], sort[k]])
                j++;
                k--;

                while(j < k && sort[j] === sort[j-1]) j++;
                while(j < k && sort[k] === sort[k+1]) k--;
            }
            else if (sum > 0) k--;
            else j++;
        }
    }
    return result;
};

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));