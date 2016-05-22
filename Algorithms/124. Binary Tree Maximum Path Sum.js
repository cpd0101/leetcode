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
var maxPathSum = function (root) {
    var maxVal = -Infinity;
    var maxSum = function (root) {
        if (root === null) {
            return 0;
        }

        var sum = root.val;

        var leftSum = maxSum(root.left);
        if (leftSum > 0) {
            sum += leftSum;
        }

        var rightSum = maxSum(root.right);
        if (rightSum > 0) {
            sum += rightSum;
        }

        maxVal = Math.max(sum, maxVal);

        return Math.max(root.val, leftSum + root.val, root.val + rightSum);
    };

    maxSum(root);

    return maxVal;
};