/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var ret = [];
    if (!root) return ret;
    if (root.left) {
        var left = inorderTraversal(root.left);
        ret = left;
    }
    ret.push(root.val);
    if (root.right) {
        var right = inorderTraversal(root.right);
        for (var i = 0; i < right.length; i++) {
            ret.push(right[i]);
        }
    }
    return ret;
};