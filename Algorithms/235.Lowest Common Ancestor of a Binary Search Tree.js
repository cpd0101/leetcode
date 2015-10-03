/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
      var count = 0;
      var left, right;
   	if (root.left) {
   		left = lowestCommonAncestor(root.left, p, q);
   		if (left && left !== true) return left;
   	}
   	if (root.right) {
   		right = lowestCommonAncestor(root.right, p, q);
   		if (right && right !== true) return right;
   	}
      if (left) count++;
      if (right) count++;
      if (root === p || root === q) count++;
      if (count >= 2) {
         return root;
      } else if (count === 1) {
         return true;
      } else {
         return false;
      }
};