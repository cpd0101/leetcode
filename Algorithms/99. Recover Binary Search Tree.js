/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    var err1, err2, pre;
    var inOrder = function (root) {
        if (root.left) {
            inOrder(root.left);
        }
        if (pre && root.val < pre.val) {
            if (err1) {
                err2 = root;
            } else {
                err1 = pre;
                err2 = root;
            }
        }
        pre = root;
        if (root.right) {
            inOrder(root.right);
        }
    };
    if (root) {
        inOrder(root);
    }
    var temp = err1.val;
    err1.val = err2.val;
    err2.val = temp;
};