var sortedArrayToBST = function(nums) {
    // if the length of nums is 1, return number
    if (nums.length === 1) return new TreeNode(nums[0]);
    // if the length of nums is 0, return null
    if (nums.length === 0) return null;
    // take the middle of the sorted array as the root
    let rootIndex = Math.floor((nums.length - 1) / 2);
    let treeRoot = new TreeNode(nums[rootIndex]);
    // set left child by recursively calling sortedArrayToBST on the left subarray
    treeRoot.left = sortedArrayToBST(nums.slice(0, rootIndex));
    treeRoot.right = sortedArrayToBST(nums.slice(rootIndex + 1));
    // repeat this step for the right child as well
    return treeRoot;
};