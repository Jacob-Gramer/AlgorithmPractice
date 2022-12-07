var inorderTraversal = function(root) {
    let path = [];
    function innerFunction(root) {
        if (!root) return;
        innerFunction(root.left);
        path.push(root.val);
        innerFunction(root.right);
    }
    innerFunction(root);
    return path;
};