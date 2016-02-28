/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    var inOrder = function (root, min, max) {
        if (!root) {
            return true;
        }
        if (root.left) {
            if (root.left.val >= root.val) {
                return false;
            }
            if (max !== null && root.left.val <= max) {
                return false;
            }
            if (min !== null && root.left.val >= min) {
                return false;
            }
        }
        if (root.right) {
            if (root.right.val <= root.val) {
                return false;
            }
            if (max !== null && root.right.val <= max) {
                return false;
            }
            if (min !== null && root.right.val >= min) {
                return false;
            }
        }
        return inOrder(root.left, min === null ? root.val : (root.val < min ? root.val : min), max)
            && inOrder(root.right, min, max === null ? root.val : (root.val > max ? root.val : max));
    };
    return inOrder(root, null, null);
};