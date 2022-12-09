var postorderTraversal = function(root) {
    if (!root) return [];
    let path = [];
    const inner = (node) => {
        if (!node) return;
        inner(node.left);
        inner(node.right);
        path.push(node.val);
    }
    inner(root);
    return path;
};