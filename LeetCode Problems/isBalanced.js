function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isBalanced = function(root) {
    if(!root) return true
	// calculate the depth of each node
    const helper = (node, depth = 0) => {
        if (!node) return depth
        return Math.max(helper(node.right,depth+1), helper(node.left,depth+1))
    }

	// make sure different node have both side (right and left) and height between two of them not more than 1.
    return isBalanced(root.right) && isBalanced(root.left) && Math.abs(helper(root.right) - helper(root.left)) <= 1
};

let testRoot = new TreeNode(1);
testRoot.left = new TreeNode(2);
testRoot.right = new TreeNode(2);
testRoot.left.left = new TreeNode(3);
testRoot.right.right = new TreeNode(3);
testRoot.left.left.left = new TreeNode(4);
testRoot.right.right.right = new TreeNode(4);

console.log(isBalanced(testRoot));

