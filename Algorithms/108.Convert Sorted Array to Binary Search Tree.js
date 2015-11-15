/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    } else {
        var mid = 0;
        if (nums.length % 2) {
            mid = parseInt(nums.length / 2);
        } else {
            mid = parseInt(nums.length / 2) - 1;
        }
        var node = new TreeNode(nums[mid]);
        node.left = sortedArrayToBST(nums.slice(0, mid));
        node.right = sortedArrayToBST(nums.slice(mid + 1));
        return node;
    }
};