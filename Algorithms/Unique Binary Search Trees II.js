/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generate = function (min, max) {
    var ret = [];
    if (min === max) {
        ret.push(new TreeNode(min));
        return ret;
    } else {
        var i, j, k, l, r, t;
        r = generate(min + 1, max);
        for (i = 0; i < r.length; i++) {
            t = new TreeNode(min);
            t.right = r[i];
            ret.push(t);
        }
        for (i = min + 1; i < max; i++) {
            l = generate(min, i - 1);
            r = generate(i + 1, max);
            for (j = 0; j < l.length; j++) {
                for(k = 0; k < r.length; k++) {
                    t = new TreeNode(i);
                    t.left = l[j];
                    t.right = r[k];
                    ret.push(t);
                }
            }
        }
        l = generate(min, max - 1);
        for (i = 0; i < l.length; i++) {
            t = new TreeNode(max);
            t.left = l[i];
            ret.push(t);
        }
        return ret;
    }
};

var generateTrees = function(n) {
    if (n < 1) {
        return [[]];
    } else {
        return generate(1, n);
    }
};