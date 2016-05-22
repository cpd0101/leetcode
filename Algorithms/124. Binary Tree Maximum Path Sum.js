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
    if (root === null) {
        return 0;
    }

    var length = 1000;

    var singlePathCache = {};
    var singlePathSum = function (root, path) {
        if (path.length < length && singlePathCache[path] !== undefined) {
            return singlePathCache[path];
        } 
        var sum = root.val;
        var arr = [];
        if (root.left) {
            var left = singlePathSum(root.left, path + '<' + root.left.val);
            if (left > 0) {
                arr.push(left);
            }
        }
        if (root.right) {
            var right = singlePathSum(root.right, path + '>' + root.right.val);
            if (right > 0) {
                arr.push(right);
            }
        }
        if (arr.length) {
            sum += Math.max.apply(null, arr);
        }
        sum = sum > 0 ? sum : 0;
        if (path.length < length) {
            singlePathCache[path] = sum;
        }
        return sum;
    };

    var useRootPathCache = {};
    var useRootPathSum = function (root, path) {
        if (path.length > length) {
            return -Infinity;
        }
        if (path.length < length && useRootPathCache[path] !== undefined) {
            return useRootPathCache[path];
        }
        var arr = [root.val];
        var left, right;
        if (root.left) {
            left = singlePathSum(root.left, path + '<' + root.left.val);
            arr.push(left + root.val);
        }
        if (root.right) {
            right = singlePathSum(root.right, path + '>' + root.right.val);
            arr.push(root.val + right);
        }
        if (root.left && root.right) {
            arr.push(left + root.val + right);
        }
        var max = Math.max.apply(null, arr);
        if (path.length < length) {
            useRootPathCache[path] = max;
        }
        return max;
    };

    var notRootPathSum = function (root, path) {
        var arr = [];
        if (root.left) {
            arr.push(notRootPathSum(root.left, path + '<' + root.left.val));
            arr.push(useRootPathSum(root.left, path + '<' + root.left.val));
        }
        if (root.right) {
            arr.push(notRootPathSum(root.right, path + '>' + root.right.val));
            arr.push(useRootPathSum(root.right, path + '>' + root.right.val));
        }
        var max = Math.max.apply(null, arr);
        return max;
    };

    return Math.max(useRootPathSum(root, root.val), notRootPathSum(root, root.val));
};