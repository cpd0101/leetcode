/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var ret = [];
    var level = 1;
    var q = [];
    if (!root) return ret;
    q.push({
        level: level,
        node: root
    });
    var temp = [];
    while (q.length) {
        var item = q.shift();
        root = item.node;
        if (level == item.level) {
            temp.push(root.val);
        } else {
            if (level % 2 === 1) {
                ret.push(temp);
            } else {
                ret.push(temp.reverse());
            }
            temp = [];
            temp.push(root.val);
            level = item.level;
        }
        if (root.left) q.push({
            level: level + 1,
            node: root.left
        });
        if (root.right) q.push({
            level: level + 1,
            node: root.right
        });
    }
    if (level % 2 === 1) {
        ret.push(temp);
    } else {
        ret.push(temp.reverse());
    }
    return ret;
};