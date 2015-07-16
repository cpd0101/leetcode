/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var queue = [];
    if (root) {
    	queue.push({
    		node: root,
    		s: root.val
    	});
    } else {
    	return false;
    }
    while (queue.length) {
    	var obj = queue.shift();
    	var node = obj.node;
    	var s = obj.s;
    	if (s === sum && node.left === null && node.right === null) {
    		return true;
    	} else {
    		if (node.left) {
    			queue.push({
    				node: node.left,
    				s: s + node.left.val
    			});
    		}
    		if (node.right) {
    			queue.push({
    				node: node.right,
    				s: s + node.right.val
    			});
    		}
    	}
    }
    return false;
};