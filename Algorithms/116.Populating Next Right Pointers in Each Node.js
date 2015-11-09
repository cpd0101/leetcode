/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    var q = [];
    if (root) {
        q.push({
            node: root,
            level: 1
        });
    }
    while (q.length) {
        var p = q.shift();
        var node = p.node;
        var level = p.level;
        if (q.length && level === q[0].level) {
            node.next = q[0].node;
        }
        if (node.left) {
            q.push({
                node: node.left,
                level: level + 1
            });
        }
        if (node.right) {
            q.push({
                node: node.right,
                level: level + 1
            });
        }
    }
};