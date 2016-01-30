/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var queue = [];
    var ret = [];
    if (root) {
        queue.push(root);
    }
    while (queue.length) {
        var p = queue.shift();
        if (p) {
            ret.push(p.val);
            queue.push(p.left);
            queue.push(p.right);
        } else {
            ret.push(null);
        }
    }
    return ret.join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var ret = data.split(',');
    var root = null;
    var queue = [];
    if (ret[0]) {
        root = new TreeNode(parseInt(ret[0]));
        queue.push(root);
    }
    for (var i = 1; i < ret.length; i += 2) {
        var p = queue.shift();
        var left = null;
        var right = null;
        if (ret[i]) {
            left = new TreeNode(parseInt(ret[i]));
            queue.push(left);
        }
        if (ret[i + 1]) {
            right = new TreeNode(parseInt(ret[i + 1]));
            queue.push(right);
        }
        p.left = left;
        p.right = right;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */