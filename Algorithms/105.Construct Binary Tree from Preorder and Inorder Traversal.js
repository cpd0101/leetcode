/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var root = null;
    if (inorder.length === 0) return root;
    var q = [];
    q.push({
        parent: root,
        preorder: preorder,
        inorder: inorder
    });
    while (q.length) {
        var item = q.pop();
        preorder = item.preorder;
        inorder = item.inorder;
        var parent = item.parent;
        var val = preorder[0];
        var node = new TreeNode(val);
        if (parent) {
            parent[item.child] = node;
        } else {
            root = node;
        }
        var mid = inorder.indexOf(val);
        if (mid > 0) {
            q.push({
                parent: node,
                child: 'left',
                preorder: preorder.slice(1, mid + 1),
                inorder: inorder.slice(0, mid)
            });
        }
        if (mid < preorder.length - 1) {
            q.push({
                parent: node,
                child: 'right',
                preorder: preorder.slice(mid + 1),
                inorder: inorder.slice(mid + 1)
            });
        }
    }
    return root;
};