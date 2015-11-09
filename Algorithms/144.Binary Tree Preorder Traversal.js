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
var preorderTraversal = function(root) {
    var ret = [];
    if (!root) return ret;
    ret.push(root.val);
    if (root.left) {
        var left = preorderTraversal(root.left);
        for (var i = 0; i < left.length; i++) {
            ret.push(left[i]);
        }
    }
    if (root.right) {
        var right = preorderTraversal(root.right);
        for (var j = 0; j < right.length; j++) {
            ret.push(right[j]);
        }
    }
    return ret;
};