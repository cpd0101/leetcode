/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return;
    }
    var stack = [];
    if (root.right) {
        stack.push(root.right);
        root.right = null;
    }
    if (root.left) {
        stack.push(root.left);
        root.left = null;
    }
    var p = root;
    while (stack.length) {
        var q = stack.pop();
        if (q.right) {
            stack.push(q.right);
            q.right = null;
        }
        if (q.left) {
            stack.push(q.left);
            q.left = null;
        }
        p.right = q;
        p = p.right;
    }
};