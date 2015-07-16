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
var levelOrder = function(root) {
    var queue = [];
    var result = [];
    if (root) {
    	queue.push({
    		node: root,
    		level: 1
    	});
    } else {
    	return result;
    }
    var curLevel = 1;
    var temp = [];
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
    	if (level === curLevel) {
    		temp.push(node.val);
    	} else {
    		result.push(temp);
    		curLevel = level;
    		temp = [];
    		temp.push(node.val);
    	}
    }
    result.push(temp);
    return result;
};