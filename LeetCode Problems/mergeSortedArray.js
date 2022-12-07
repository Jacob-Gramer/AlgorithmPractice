var merge = function(nums1, m, nums2, n) {
    let left = 0;
    let right = 0;
    nums1.splice(m, nums1.length);
    nums2.splice(n, nums2.length);
    while(right < n) {
        if (nums1[left] >= nums2[right] || nums1[left] === undefined) {
            nums1.splice(left, 0, nums2[right]);
            right++;
            left++;
        } else {
            left++;
        }
    }
};

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

console.log(merge(nums1, m, nums2, n));