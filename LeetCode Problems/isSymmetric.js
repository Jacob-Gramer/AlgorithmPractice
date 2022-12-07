var isSymmetric = function(root) {
    if (!root || (!root.left && !root.right)) return true;
    let isSymmetric = true;
    const innerFunction = (left, right) => {
        if (!left && !right) return;
        if (!left || !right || (left.val !== right.val)) {
            isSymmetric = false;
            return;
        }
        innerFunction(left.left, right.right);
        innerFunction(left.right, right.left);
    }
    innerFunction(root.left, root.right);
    return isSymmetric;
};