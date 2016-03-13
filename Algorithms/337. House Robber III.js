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
var rob = function (root) {
    var cache = {};
    var robCache = function (root, path) {
        if (!root) {
            return 0;
        }
        if (cache[path]) {
            return cache[path];
        }
        var left = root.left;
        var right = root.right;
        var ret1 = root.val;
        var ret2 = robCache(left, path + 1) + robCache(right, path + 2);
        if (left) {
            ret1 += robCache(left.left, path + 11) + robCache(left.right, path + 12);
        }
        if (right) {
            ret1 += robCache(right.left, path + 21) + robCache(right.right, path + 22);
        }
        cache[path] = Math.max(ret1, ret2);
        return cache[path];
    };
    return robCache(root, '0');
};