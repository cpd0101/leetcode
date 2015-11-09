/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var root = null;
    if (inorder.length === 0) return root;
    var q = [];
    q.push({
        parent: root,
        inorder: inorder,
        postorder: postorder
    });
    while (q.length) {
        var item = q.pop();
        inorder = item.inorder;
        postorder = item.postorder;
        var parent = item.parent;
        var val = postorder[postorder.length - 1];
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
                inorder: inorder.slice(0, mid),
                postorder: postorder.slice(0, mid)
            });
        }
        if (mid < postorder.length - 1) {
            q.push({
                parent: node,
                child: 'right',
                inorder: inorder.slice(mid + 1),
                postorder: postorder.slice(mid, postorder.length - 1)
            });
        }
    }
    return root;
};