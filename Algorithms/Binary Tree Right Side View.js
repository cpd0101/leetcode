/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var q = [];
    var ret = [];
    if (root) {
        q.push({
            node: root,
            level: 1
        });
    }
    var level = 0;
    while (q.length) {
        var p = q.shift();
        var node = p.node;
        if (p.level !== level) {
            ret.push(node.val);
        }
        level = p.level;
        if (node.right) {
            q.push({
                node: node.right,
                level: level + 1
            });
        }
        if (node.left) {
            q.push({
                node: node.left,
                level: level + 1
            });
        }
    }
    return ret;
};