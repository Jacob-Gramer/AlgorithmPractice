var preorderTraversal = function(root) {
    if (!root) return [];
    let path = [];
    const innerFunction = (node) => {
        if (!node) return;
        path.push(node.val);
        innerFunction(node.left);
        innerFunction(node.right);
    }
    innerFunction(root);
    return path;
};