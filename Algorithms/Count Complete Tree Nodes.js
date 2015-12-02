/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    var left = 0;
    var right = 0;
    var p = root;
    while (p) {
        left++;
        p = p.left;
    } 
    p = root;
    while (p) {
        right++;
        p = p.right;
    }
    if (left === 2 && right === 1) {
        return 2;
    } else if (left === right) {
        return Math.pow(2, left) - 1;
    } else {
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
};