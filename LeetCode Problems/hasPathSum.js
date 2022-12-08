function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

// var hasPathSum = function(root, targetSum) {
//     debugger;
//     let path = false;
//     if (root === null) return false;
//     const helper = (node, total) => {
//         if (!node || path === true) return;
//         total += node.val;
//         if (total === targetSum && !node.left && !node.right) {
//             path = true;
//             return;
//             }
//         helper(node.left, total);
//         helper(node.right, total);
//     }
//     helper(root, 0);
//     return path;
// };

var hasPathSum = function(root, sum) {
    debugger;
    if(!root) return false
    sum -= root.val
    if(!root.right && !root.left) return !sum
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}

let root = new TreeNode(-2);
root.right = new TreeNode(-3);

console.log(hasPathSum(root, -5));