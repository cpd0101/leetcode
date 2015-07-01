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
var levelOrderBottom = function(root) {
    var result = [];
    if (!root) {
    	return result;
    }
    var q1 = [];
    q1.push(root);
    while (q1.length > 0) {
    	var temp = [];
    	var q2 = [];
    	for (var i = 0; i < q1.length; i++) {
    		temp.push(q1[i].val);
    		if (q1[i].left) {
    			q2.push(q1[i].left);
    		}
    		if (q1[i].right) {
    			q2.push(q1[i].right);
    		}
    	}
    	result.unshift(temp);
    	q1 = q2;
    }
    return result;
};