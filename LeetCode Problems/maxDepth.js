var maxDepth = function(root) {
    if (!root) return 0;
    let depthList = [];
    const innerFunction = (node, depth) => {
        if (!node) return;
        if (!node.left && !node.right) {
            depthList.push(depth);
            return;
        }
        innerFunction(node.left, depth + 1);
        innerFunction(node.right, depth + 1);
    }
    innerFunction(root, 1);
    return Math.max(...depthList);
};