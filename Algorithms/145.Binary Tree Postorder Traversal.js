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
var postorderTraversal = function(root) {
    var ret = [];
    if (!root) return ret;
    if (root.left) {
        var left = postorderTraversal(root.left);
        ret = left;
    }
    if (root.right) {
        var right = postorderTraversal(root.right);
        for (var i = 0; i < right.length; i++) {
            ret.push(right[i]);
        }
    }
    ret.push(root.val);
    return ret;
};