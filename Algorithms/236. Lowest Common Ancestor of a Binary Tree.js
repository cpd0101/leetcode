/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    var traversal = function (root, p, q) {
        var left, right, self;
        if (root.left) {
            left = traversal(root.left, p, q);
            if (typeof left !== 'number') {
                return left;
            }
        } else {
            left = 0;
        }

        if (root.right) {
            right = traversal(root.right, p, q);
            if (typeof right !== 'number') {
                return right;
            }
        } else {
            right = 0;
        }

        if (root === p || root === q) {
            self = 1;
        } else {
            self = 0;
        }

        var sum = left + right + self;
        if (sum > 1) {
            return root;
        } else {
            return sum;
        }
    };

    var node = traversal(root, p, q);

    if (typeof node === 'number') {
        return null;
    } else {
        return node;
    }
};