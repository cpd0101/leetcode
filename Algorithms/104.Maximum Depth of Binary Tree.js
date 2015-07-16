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
var maxDepth = function(root) {
    var queue = [];
    if (root) {
    	queue.push({
    		node: root,
    		level: 1
    	});
    } else {
    	return 0;
    }
    while (queue.length) {
    	var obj = queue.shift();
    	var node = obj.node;
    	var level = obj.level;
    	if (node.left) {
    		queue.push({
    			node: node.left,
    			level: level + 1
    		});
    	}
    	if (node.right) {
    		queue.push({
    			node: node.right,
    			level: level + 1
    		});
    	}
    }
    return level;
};