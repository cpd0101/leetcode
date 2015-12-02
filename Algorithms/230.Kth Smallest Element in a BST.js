/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var stack = [];
    var p = root;
    while (p) {
        stack.push(p);
        p = p.left;
    }

    while (--k) {
        p = stack.pop();
        if (p.right) {
            p = p.right;
            while (p) {
                stack.push(p);
                p = p.left;
            }
        }
    }

    return stack.pop().val;
};