/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var ret = [];
    var obj = {};
    var stack = [];
    var uid = 0;
    if (root) {
        stack.push({
            pid: uid,
            node: root
        });
    }
    while (stack.length > 0) {
        var item = stack.pop();
        root = item.node;
        if (obj[item.pid]) {
            obj[++uid] = obj[item.pid] + '->' + root.val;
        } else {
            obj[++uid] = '' + root.val;
        }
        if (!root.right && !root.left) {
            ret.push(obj[uid]);
            continue;
        }
        if (root.right) {
            stack.push({
                pid: uid,
                node: root.right
            });
        }
        if (root.left) {
            stack.push({
                pid: uid,
                node: root.left
            });
        }
    }
    return ret;
};