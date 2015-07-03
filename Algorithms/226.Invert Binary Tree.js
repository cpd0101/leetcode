/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root) {
        var left = root.left;
        var right = root.right;
        root.left = right;
        root.right = left;
        invertTree(right);
        invertTree(left);
        return root;
    } else {
        return root;
    }
};