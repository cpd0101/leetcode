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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var queue = [];
    var ret = [];
    if (!root) {
        return ret;
    }
    queue.push({
        node: root,
        sum: 0,
        q: []
    });
    while (queue.length) {
        var p = queue.shift();
        var node = p.node;
        var s = p.sum;
        var q = p.q;
        s += node.val;
        if (!node.left && !node.right) {
            if (s === sum) {
                ret.push(q.concat(node.val));
            }
        }
        if (node.left) {
            queue.push({
                node: node.left,
                sum: s,
                q: q.concat(node.val)
            });
        }
        if (node.right) {
            queue.push({
                node: node.right,
                sum: s,
                q: q.concat(node.val)
            });
        }
    }
    return ret;
};