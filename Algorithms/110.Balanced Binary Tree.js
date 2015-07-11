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
var isBalanced = function(root) {
    function deep (root) {
    	if (root) {
    		var left = deep(root.left);
    		if (left < 0) return -1;
    		var right = deep(root.right);
    		if (right < 0) return -1; 
    		var max = left > right ? left : right;
    		var min = left < right ? left : right;
    		if (max - min > 1) {
    			return -1;
    		} else {
    			return max + 1;
    		}
    	} else {
    		return 0;
    	}
    }
    if (root) {
    	var left = deep(root.left);
    	if (left < 0) return false;
    	var right = deep(root.right);
    	if (right < 0) return false;
    	if (Math.abs(left - right) > 1) {
    		return false;
    	} else {
    		return true;
    	}
    } else {
    	return true;
    }
};