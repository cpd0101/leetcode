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
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    var q = [];
    var ret = [];
    q.push({
        node: root,
        path: ''
    });
    while (q.length) {
        var node = q.pop();
        var p = node.node;
        var path = node.path + p.val;
        if (!p.left && !p.right) {
            ret.push(path);
        } else {
            p.left && q.push({
                node: p.left,
                path: path
            });
            p.right && q.push({
                node: p.right,
                path: path
            });
        }
    }
    var sum = 0;
    for (var i = 0; i < ret.length; i++) {
        sum += parseInt(ret[i]);
    }
    return sum;
};