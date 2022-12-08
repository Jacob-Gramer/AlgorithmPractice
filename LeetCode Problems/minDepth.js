function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

var minDepth = function(root) {
    if (!root) return 0;
    let helper = (node, depth) => {
        if (!node) return Infinity;
        if (!node.left && !node.right) return depth;
        return Math.min(helper(node.left, depth + 1), helper(node.right, depth + 1))
    }
    return helper(root, 1);
};

let testRoot = new TreeNode(2);
testRoot.right = new TreeNode(3);
testRoot.right.right = new TreeNode(4);
testRoot.right.right.right = new TreeNode(5);
testRoot.right.right.right.right = new TreeNode(6);

console.log(minDepth(testRoot));
