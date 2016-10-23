/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    var total = function (root, sum, started) {
        var ans = 0;
        if (root.val === sum) {
            ans++;
        }
        if (root.left) {
            if (!started) {
                ans += total(root.left, sum);
            }
            ans += total(root.left, sum - root.val, true);
        }
        if (root.right) {
            if (!started) {
                ans += total(root.right, sum);
            }
            ans += total(root.right, sum - root.val, true);
        }
        return ans;
    }
    if (!root) {
        return 0;
    }
    return total(root, sum);
};