/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function testSymmetric(left, right) {
    	if (left && right) {
    		if (left.val === right.val) {
    			return testSymmetric(left.left, right.right) && testSymmetric(left.right, right.left);
    		} else {
    			return false;
    		}
    	} else {
    		return left === right;
    	}
    }
    if (root) {
    	return testSymmetric(root.left, root.right);
    } else {
    	return true;
    }
};