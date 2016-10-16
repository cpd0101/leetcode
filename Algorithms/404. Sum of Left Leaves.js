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
var sumOfLeftLeaves = function (root) {
    var sum = 0;
    var arr = [];
    if (root) {
        arr.push({
            node: root,
            flag: 'right'
        });
    }
    while (arr.length) {
        var tmp = arr.pop();
        var n = tmp.node;
        if (!n.left && !n.right && tmp.flag === 'left') {
            sum += n.val;
            continue;
        }
        if (n.right) {
            arr.push({
                node: n.right,
                flag: 'right'
            });
        }
        if (n.left) {
            arr.push({
                node: n.left,
                flag: 'left'
            });
        }
    }
    return sum;
};